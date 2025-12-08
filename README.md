# DSE Project API

This is the backend API for the DSE (Digital Skills for Employability) project, built with Node.js and Express.

## Project Overview

A RESTful API server built with **Express.js** that provides authentication and items management functionality. The API connects to a **MySQL** database and uses JWT for secure authentication.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.1.0)
- **Database**: MySQL (mysql2)
- **Authentication**: JWT (jsonwebtoken)
- **Security**: bcrypt for password hashing
- **CORS**: Enabled for cross-origin requests
- **Environment**: dotenv for configuration management
- **Development**: nodemon for auto-reload

## Project Structure

```
dse_api/
├── server.js              # Main server entry point
├── package.json           # Project dependencies and scripts
├── .env                   # Environment variables (not committed)
├── .gitignore             # Git ignore rules
├── config/
│   └── db.js              # MySQL database connection configuration
├── authRoutes/            # Authentication routes (empty - ready for implementation)
├── itemsRoutes/           # Items routes (empty - ready for implementation)
├── itemsController/       # Items controller logic (empty - ready for implementation)
└── node_modules/          # Installed dependencies
```

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd dse_api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=dse_backend
   ```

## Available Scripts

- **Development** (with auto-reload):
  ```bash
  npm run dev
  ```
  Uses nodemon to automatically restart the server when files change.

- **Production** (standard):
  ```bash
  node server.js
  ```

- **Tests**:
  ```bash
  npm test
  ```
  Currently not configured.

## Current Endpoints

### Health Check
- **GET** `/`
  - Returns: Welcome message
  - Response: `"Welcome to DSE Backend API developed by DSE Team"`

## Features

- Express server with basic routing
- MySQL database connection pool
- JWT authentication support (dependencies installed)
- Password hashing with bcrypt
- CORS enabled
- Environment variable configuration
- Authentication routes (ready for implementation)
- Items routes (ready for implementation)
- Items controller (ready for implementation)

## Database Connection

The project uses MySQL connection pooling configured in `config/db.js`:
- Reads configuration from environment variables
- Falls back to defaults: `localhost` and `root` user
- Password and database name must be set via `.env` file

## Getting Started

1. Ensure MySQL is installed and running on your system
2. Create a database named according to your `DB_NAME` environment variable
3. Install dependencies: `npm install`
4. Configure `.env` file with your database credentials
5. Run the development server: `npm run dev`
6. The server will start on the port specified in `.env` (default: 3000)

## Development Notes

- The `authRoutes` folder is prepared for authentication endpoints
- The `itemsRoutes` and `itemsController` are prepared for CRUD operations
- Use JWT tokens for API authentication in subsequent requests
- Passwords should always be hashed using bcrypt before storing in the database

## Author

DSE Team

## License

MIT

## Troubleshooting

- **Database connection failed**: Ensure MySQL is running and credentials in `.env` are correct
- **Port already in use**: Change the `PORT` in your `.env` file
- **Module not found**: Run `npm install` to install all dependencies
