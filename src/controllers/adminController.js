const { getAllRequests } = require('../models/requestModel');

async function renderRequests(req, res) {
  try {
    const requests = await getAllRequests();

    res.render('pages/admin-requests', {
      title: 'Заявки клиентов',
      requests,
      error: null,
    });
  } catch (error) {
    console.error(error);

    res.render('pages/admin-requests', {
      title: 'Заявки клиентов',
      requests: [],
      error: 'Не удалось загрузить заявки из базы данных.',
    });
  }
}

module.exports = { renderRequests };
