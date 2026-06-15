const { createRequest } = require('../models/requestModel');

function renderRequestForm(req, res) {
  res.render('pages/request', {
    title: 'Оставить заявку',
    errors: [],
    formData: {},
    success: false,
  });
}

async function submitRequest(req, res) {
  const formData = {
    fullName: (req.body.fullName || '').trim(),
    company: (req.body.company || '').trim(),
    phone: (req.body.phone || '').trim(),
    email: (req.body.email || '').trim(),
    message: (req.body.message || '').trim(),
  };

  const errors = [];

  if (!formData.fullName) errors.push('Введите ФИО.');
  if (!formData.phone) errors.push('Введите телефон.');
  if (!formData.email) errors.push('Введите e-mail.');
  if (!formData.message) errors.push('Введите текст запроса.');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formData.email && !emailRegex.test(formData.email)) {
    errors.push('Введите корректный e-mail.');
  }

  const phoneRegex = /^[0-9+()\-\s]{6,30}$/;
  if (formData.phone && !phoneRegex.test(formData.phone)) {
    errors.push('Введите корректный телефон.');
  }

  if (errors.length > 0) {
    return res.status(400).render('pages/request', {
      title: 'Оставить заявку',
      errors,
      formData,
      success: false,
    });
  }

  try {
    await createRequest(formData);

    return res.render('pages/request', {
      title: 'Оставить заявку',
      errors: [],
      formData: {},
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).render('pages/request', {
      title: 'Оставить заявку',
      errors: ['Ошибка сохранения заявки в базе данных. Проверьте подключение к PostgreSQL.'],
      formData,
      success: false,
    });
  }
}

module.exports = {
  renderRequestForm,
  submitRequest,
};
