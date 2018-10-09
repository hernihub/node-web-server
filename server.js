const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.send('<h1>hello express</h1>');
    res.send({
        name: 'Herni',
        likes: [
            'marihuana',
            'lsd',
            'mescaline',
            'psilocybin',
            'ketamine',
            'gym'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000);