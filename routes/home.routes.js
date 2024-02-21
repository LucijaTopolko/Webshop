var express = require('express');
var bp = require('body-parser');
var router = express.Router();

data = require('../data/data');

router.get('/home/getCategories', async function (req, res, next) {
    if (!req.session.kategorije) {
        req.session.data = data;
        req.session.kategorije = [];
        for (let i = 0; i < 10; i++) {
            req.session.kategorije.push(data.categories[i].name);
        }
        req.session.kolicine = req.session.kolicine || new Array(50).fill(0);
        req.session.suma = req.session.suma || 0;
        req.session.kat = req.session.kat || 0;
        req.session.naslovkat = req.session.naslovkat || req.session.kategorije[0];
        req.session.imena = req.session.imena || req.session.data.categories[0].products.slice(0, 5).map(product => product.name);
        req.session.slike = req.session.slike || req.session.data.categories[0].products.slice(0, 5).map(product => product.image);
    }
    res.render('home', {
        naslovkat: req.session.naslovkat,
        kategorije: req.session.kategorije,
        suma: req.session.suma,
        imena: req.session.imena,
        slike: req.session.slike,
        kat: req.session.kat,
        kolicine: req.session.kolicine
    });
});


router.post('/home/add/:id', async function (req, res, next) {
    let id = parseInt(req.params.id);
    if (!req.session.kolicine || !req.session.data) {
        req.session.data = data;
        req.session.kategorije = [];
        for (let i = 0; i < 10; i++) {
            req.session.kategorije.push(data.categories[i].name);
        }
        req.session.kolicine = new Array(50).fill(0);
        req.session.suma = 0;
        req.session.kat = Math.floor(parseInt(req.params.id) / 5)
        req.session.naslovkat = req.session.kategorije[req.session.kat];
        req.session.imena = req.session.data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.name);
        req.session.slike = req.session.data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.image);
    }
    req.session.kolicine[parseInt(req.params.id)]++;
    req.session.suma++;
    res.redirect('/home/getCategories');
});

router.get('/', function (req, res, next) {
    res.redirect('/home/getCategories');
});

router.get('/home/getProducts/:id', async function (req, res, next) {
    let id = req.params.id;
    if (!req.session.kolicine) {
        req.session.data = data;
        req.session.kategorije = [];
        for (let i = 0; i < 10; i++) {
            req.session.kategorije.push(data.categories[i].name);
        }
        req.session.kolicine = new Array(50).fill(0);
        req.session.suma = 0;
        req.session.kat = Math.floor(parseInt(req.params.id) / 5)
        req.session.naslovkat = req.session.kategorije[req.session.kat];
        req.session.imena = req.session.data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.name);
        req.session.slike = req.session.data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.image);
    }
    req.session.naslovkat = req.session.kategorije[id];
    req.session.imena = req.session.data.categories[id].products.slice(0, 5).map(product => product.name);
    req.session.slike = req.session.data.categories[id].products.slice(0, 5).map(product => product.image);
    req.session.kat = parseInt(id);
    res.redirect('/home/getCategories');
});

module.exports = router;
