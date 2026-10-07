# Express CI/CD Mock Server

A simple Express.js server used to test and compare **GitHub Actions** and **CircleCI** test pipelines.

## Quick Start

1. Install dependencies `npm install`
2. Run tests locally `npm test`
3. Start the server `npm start`

## Project Structure

```
├── .github/workflows/  # GitHub Actions config
├── .circleci/          # CircleCI config
├── src/                # Express app & endpoints
└── tests/              # Jest
```

## CI Pipelines

Both CI configurations run automatically on `push` and `pull_request` to `main`:

- **GitHub Actions** (`.github/workflows`)

- **CircleCI** (`.circleci`)

## Scripts

- `npm start` – Run server (`http://localhost:3000`)

- `npm test` – Run Jest test suite

- `npm run lint` – Check code style with ESLint
