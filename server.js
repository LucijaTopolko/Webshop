const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

//pohrana sjednica 
app.use(session({
    secret: 'password', resave: false, saveUninitialized: true,
    cookie: { maxAge: 10 * 1000 }
}));

app.use(express.static('public'));

//moduli s funkcionalnostima
const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

//ejs predlošci
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//staticki resursi
app.use(express.static(path.join(__dirname, 'public')));

//dekodiranje parametara
app.use(express.urlencoded({ extended: true }));

//definiranje ruta
app.use('/', homeRouter);
app.use('/cart', cartRouter);

//pokretanje posluzitelja na portu 3000
app.listen(3000);