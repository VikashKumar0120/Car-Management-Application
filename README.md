# Car Management Application

## Overview

The Car Management Application is a web-based platform that allows users to manage their car listings. Users can create, view, edit, and delete cars, each with up to 10 images, a title, a description, and tags. The application includes user authentication and ensures that users can only manage their own listings. It also provides a search functionality to filter cars based on keywords.

## Features

- **User Authentication**: Sign up and log in to manage your car listings.
- **Car Management**: Add, view, edit, and delete cars.
- **Image Upload**: Upload up to 10 images per car.
- **Search Functionality**: Search through car listings by title, description, or tags.
- **Responsive Design**: Accessible on various devices.

## Technologies Used

- **Backend**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)
- **Frontend**: [React](https://reactjs.org/), [Axios](https://axios-http.com/)
- **Authentication**: JSON Web Tokens ([JWT](https://jwt.io/))
- **Image Handling**: [Multer](https://www.npmjs.com/package/multer)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend

- Backend (Node.js with Express  and MongoDB) :
`npm init -y`

`npm install express mongoose bcryptjs jsonwebtoken multer1`

- User Authentication
- Car Model
- API Routes
- Middleware for Authentication
- Server Setup

   
## Frontend 


- Navigate to the frontend directory:
`cd ../car-management-frontend`

- Install dependencies:
`npm install`
- Start the React development server:
`npm start`
## Usage
- Run the application in your web browser.
- Use the sign-up page to create a new account or log in with existing credentials.
- Manage your car listings through the user interface.
## API Reference

#### Get all items

```http
User Authentication
POST /auth/signup: Create a new user
```
``POST /auth/signup: Create a new userPOST`` 
``/auth/login: Log in a user``





## Authors

- [Vikash Kumar](https://www.github.com/octokatherine)


## Contact
- any questions or feedback, please contact your- vikashkumar30526@gmail.com  .
