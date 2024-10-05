const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extender:true}));
app.use('/', routes);
app.use(express.static('public'));
//add
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json({extented:true}));

app.get('/playlist', (req, res) => {
    const query = 'SELECT * FROM myplaylist';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.post('/playlist', (req, res) => {
    const {name = "", songs = ''} = req.body
    const query = `INSERT INTO myplaylist (name, songs) VALUES ?`;
    const values = [[name, songs]]

    db.query(query, [values], (err, results) => {
        if (err) {
            return console.error('Error inserting data:', err);
        }
        console.log('Data inserted successfully:', results);
        res.send(results)

    });
})
app.delete('/playlist/:id', (req, res) => {
    const {id =""} = req.params
    console.log(id)
    const query = `DELETE FROM myplaylist WHERE id = ${id}`;

    db.query(query, (err, results) => {
        if (err) {
            return console.error('Error deleting data:', err);
        }
        console.log('Data deleted successfully:', results);
        res.send(results)

    });
})

app.listen(8011, ()=>{
    console.log('server initialized on http://localhost:8011');

});
