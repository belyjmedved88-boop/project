# Сайт-визитка ООО «Базис-Проект»

Полный многостраничный сайт на Node.js, Express, EJS и PostgreSQL.

## Страницы

- `/` — Главная
- `/about` — О компании
- `/catalog` — Каталог / Услуги
- `/contacts` — Контакты
- `/request` — Форма заявки
- `/admin/requests` — Просмотр заявок

## Установка

Открой терминал в папке проекта:

```bash
cd basis-project-site-full
npm install
```

## Настройка PostgreSQL

В файле `.env` уже указаны данные:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=basis_project
DB_PASSWORD=0586
DB_PORT=5432
```

Если база называется иначе, измени `DB_NAME`.

## Создание таблиц

Сначала создай базу данных `basis_project` в pgAdmin или через SQL:

```sql
CREATE DATABASE basis_project;
```

Затем в терминале проекта выполни:

```bash
npm run db:init
```

Это создаст таблицы:

- `contacts`
- `requests`

## Проверка подключения

```bash
npm run db:test
```

## Запуск сайта

```bash
npm start
```

Открой в браузере:

```text
http://localhost:3000
```

## Если появляется Cannot GET

Проверь, что открываешь:

```text
http://localhost:3000/
```

А не:

```text
http://localhost:3000/index.html
```

Этот проект использует маршруты Express и EJS-шаблоны, поэтому файла `index.html` нет.
