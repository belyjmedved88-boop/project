CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(50),
  email VARCHAR(255),
  address TEXT
);

CREATE TABLE IF NOT EXISTS requests (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO contacts (phone, email, address)
SELECT '+7 (3952) 123-456', 'info@basis-project.ru', 'г. Иркутск'
WHERE NOT EXISTS (SELECT 1 FROM contacts);
