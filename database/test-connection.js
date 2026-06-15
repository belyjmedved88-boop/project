require('dotenv').config();

const pool = require('../src/config/db');

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Подключение к PostgreSQL работает:', result.rows[0]);
  } catch (error) {
    console.error('Ошибка подключения к PostgreSQL:', error.message);
  } finally {
    await pool.end();
  }
}

testConnection();
