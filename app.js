const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// Gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));

// Application level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    nama: 'Dini Anjelina',
    title: 'Halaman Home',
  });
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'layouts/main-layout', title: 'Halaman About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { layout: 'layouts/main-layout', title: 'Halaman Contact' });
});

app.get('/closefriends', (req, res) => {
  const partner = [
    {
      nama: 'Sri Agustini',
      email: 'srgustini11@gmail.com',
    },
    {
      nama: 'Eko Firlianto',
      email: 'eko.firlianto@gmail.com',
    },
    {
      nama: 'Ari Alamsyah',
      email: 'ram.alamsyah@gmail.com',
    },
    {
      nama: 'Farah Ismah Hana',
      email: 'ram.alamsyah@gmail.com',
    },
  ];
  res.render('closefriends', { layout: 'layouts/main-layout', title: 'Halaman Closefriends', partner });
});

app.get('/product/:id', function (req, res) {
  res.send(`Product ID :  ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
