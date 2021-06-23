const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/generic', (req, res) => {
	res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
	res.sendFile(__dirname + '/public/elements.html');
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
