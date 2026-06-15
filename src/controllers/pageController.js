const { getContacts } = require('../models/contactModel');

function renderHome(req, res) {
  res.render('pages/index', { title: 'Главная' });
}

function renderAbout(req, res) {
  res.render('pages/about', { title: 'О компании' });
}

function renderCatalog(req, res) {
  res.render('pages/catalog', { title: 'Каталог / Услуги' });
}

async function renderContacts(req, res) {
  try {
    const contacts = await getContacts();
    res.render('pages/contacts', {
      title: 'Контакты',
      contacts,
      error: null,
    });
  } catch (error) {
    console.error(error);
    res.render('pages/contacts', {
      title: 'Контакты',
      contacts: null,
      error: 'Не удалось загрузить контакты из базы данных.',
    });
  }
}

module.exports = {
  renderHome,
  renderAbout,
  renderCatalog,
  renderContacts,
};
