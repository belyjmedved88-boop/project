const pool = require('../config/db');

async function getContacts() {
  const result = await pool.query('SELECT * FROM contacts ORDER BY id LIMIT 1');
  return result.rows[0] || null;
}

module.exports = { getContacts };
