var express = require('express');
var router = express.Router();

data = require('../data/data');

router.get('/', (req, res) => {
    res.redirect('cart/getAll');
});


router.post('/cart/add/:id', async function (req, res, next) {
    let id = parseInt(req.params.id);
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
        req.session.imena = data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.name);
        req.session.slike = data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.image);
    }
    req.session.kolicine[id]++;
    req.session.suma++;
    res.redirect('/cart/cart/getAll');
});

router.post('/cart/remove/:id', async function (req, res, next) {
    let id = parseInt(req.params.id);
    if (!req.session.kolicine) {
        req.session.data = data;
        req.session.kategorije = [];
        for (let i = 0; i < 10; i++) {
            req.session.kategorije.push(data.categories[i].name);
        }
        req.session.kolicine = new Array(50).fill(0);
        req.session.suma = 0;
        req.session.kat = Math.floor(parseInt(req.params.id) / 5);
        req.session.naslovkat = req.session.kategorije[req.session.kat];
        req.session.imena = req.session.data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.name);
        req.session.slike = req.session.data.categories[Math.floor(id / 5)].products.slice(0, 5).map(product => product.image);
    }
    if (req.session.kolicine[id] > 0) {
        req.session.kolicine[id]--;
        req.session.suma--;
    }
    res.redirect('/cart/cart/getAll');
});

router.get('/cart/getAll', async function (req, res, next) {
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
    res.render('cart', { suma: req.session.suma, kolicine: req.session.kolicine });
});

module.exports = router;
