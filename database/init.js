require('dotenv').config();

const fs = require('fs');
const path = require('path');
const pool = require('../src/config/db');

async function initDatabase() {
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const sql = fs.readFileSync(schemaPath, 'utf8');

    await pool.query(sql);

    console.log('Таблицы PostgreSQL успешно созданы или уже существуют.');
  } catch (error) {
    console.error('Ошибка инициализации базы данных:', error.message);
  } finally {
    await pool.end();
  }
}

initDatabase();
