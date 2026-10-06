const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Agile Freaks</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #001f3f; /* Dark Blue */
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h1 {
          font-size: 3rem;
          font-weight: bold;
          letter-spacing: 1px;
        }
      </style>
    </head>
    <body>
      <h1>Agile Freaks</h1>
    </body>
    </html>
  `);
});

app.use('/health', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  next();
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

module.exports = app;
