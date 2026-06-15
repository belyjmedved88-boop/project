const pool = require('../config/db');

async function createRequest(data) {
  const { fullName, company, phone, email, message } = data;

  const result = await pool.query(
    `INSERT INTO requests (full_name, company, phone, email, message)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [fullName, company || null, phone, email, message]
  );

  return result.rows[0];
}

async function getAllRequests() {
  const result = await pool.query(
    'SELECT * FROM requests ORDER BY created_at DESC'
  );

  return result.rows;
}

module.exports = {
  createRequest,
  getAllRequests,
};
