require('dotenv').config();

const express = require('express');
const path = require('path');

const pageRoutes = require('./routes/pageRoutes');
const requestRoutes = require('./routes/requestRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', pageRoutes);
app.use('/', requestRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
  res.status(404).render('pages/404', {
    title: 'Страница не найдена',
    currentPath: req.path
  });
});

app.listen(PORT, () => {
  console.log(`Сайт запущен: http://localhost:${PORT}`);
});
