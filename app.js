require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('home', {
		nombre: 'Gabriel Fresco',
		titulo: 'Curso de Node',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: 'Gabriel Fresco',
		titulo: 'Curso de Node',
	});
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: 'Gabriel Fresco',
		titulo: 'Curso de Node',
	});
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
