# Yettel_express_api
Express.js api for basic manipulations

## About The Project

This project is a RESTful API for managing users and tasks. The API allows creating, updating, deleting, and viewing tasks. It also supports user roles (basic and admin), where different users have different privileges for interacting with tasks. JWT authentication is used to secure the routes.

Key functionalities:

Create and update tasks for users with the basic role.
View and update tasks for administrators.
Authentication using JSON Web Tokens (JWT).
Pagination when listing tasks.
Validation for unique email addresses and usernames.


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/hermajonii/Yettel_express_api.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your data in `.env`
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
6.  Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes 
   ```
5. Run your application: 
    ```sh
    npm run dev 
    ```