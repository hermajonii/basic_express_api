# basic_express_api
Express.js api for basic manipulations

## About The Project

This project is a RESTful API for managing users and tasks. The API allows creating, updating, deleting, and viewing tasks. It also supports user roles (basic and admin), where different users have different privileges for interacting with tasks. JWT authentication is used to secure the routes.

Key functionalities:

Create and update tasks for users with the basic role.
View and update tasks for administrators.
Authentication using JSON Web Tokens (JWT).
Pagination when listing tasks.
Validation for unique email addresses and usernames.

Roles and Permissions
Basic:
 - Can create, update, and list their own tasks.

Admin:
 - Can list, update, and delete all tasks.

### Built With
 - Node.js – For server-side execution.  

 - Express.js – For building the REST API.

 - PostgreSQL – For storing data in the database.

 - Sequelize – ORM for PostgreSQL.

 - JWT (JSON Web Token) – For user authentication.
 
 - dotenv – For managing environment variables.

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/hermajonii/basic_express_api.git
   ```
2. Install NPM packages
   ```sh
   cd Basic_express_api
   npm install
   ```
3. Enter your data in `.env`
   ```js
   JWT_SECRET=your-secret-key
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=task_management
   ```
   These three should stay the same as they are in the file:
   ```js
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   ```
4. Install PostgreSQL and run it. Make a database with the same name as the value of DB_NAME in `.env`. 
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes 
   ```
6. Run your application: 
   ```sh
   npm run dev 
   ```
   Application will be available at [https://localhost:3000](https://localhost:3000).

## Usage
   _For  examples, please refer to the [Documentation](https://app.swaggerhub.com/apis-docs/MILICT99_1/express_api/1#/)_
