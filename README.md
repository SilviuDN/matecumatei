# MateCuMatei v0.1.1

## The Idea:

- MateCuMatei - free math resources for romanian speaking students

## technologies:

- Node.Js, Express.Js, Mongoose, React.Js

## Environment variables:

PORT=5000
MONGODB_URI=mongodb://localhost/matecumatei
DOMAIN_LOCAL=http://localhost:3000

SESS_SECRET
DB_REMOTE

## Backend dependencies:

    "bcrypt": "^5.0.1",
    "cloudinary": "^1.27.1",
    "connect-mongo": "^4.5.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "hbs": "^4.1.2",
    "mongoose": "^6.0.5",
    "morgan": "^1.10.0",
    "multer": "^1.4.3",
    "multer-storage-cloudinary": "^4.0.0",
    "serve-favicon": "^2.5.0"

## Frontend dependencies:

    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.4",
    "bootstrap": "^5.1.1",
    "react": "^17.0.2",
    "react-bootstrap": "^1.6.3",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"

## models

    Course
    Section
    Lecture
    User

## getting started:

### locally:

- server: <code>npm run dev</code>
- client: <code>npm start</code>
