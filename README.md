# Fullstack Sample Project

This is a very simple, sample fullstack MERN (MongoDB, Express, React, Node.js) sample project with a modern React frontend using Chakra UI, Zustand for state management, and Vite for fast development. The web app has basic functions of posting, editing, and deleting projects, I followed a Youtube tutorial to learn more about fullstack through this project: https://www.youtube.com/watch?v=MDZC8VDZnV8 

## Features

- Product listing page with grid layout
- Create new product form
- Delete products
- Responsive design with Chakra UI
- State management with Zustand
- API proxying with Vite

## Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- MongoDB database (local or cloud, e.g. MongoDB Atlas)

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd fullstack-sample-proj
```

### 2. Install dependencies
Install frontend and backend dependencies:
```bash
cd frontend
npm install
cd ../backend
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory based on the provided `.env.example`:
```bash
cp .env.example
```
Set your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the backend
```bash
cd backend
npm run dev
```
The backend will start on [http://localhost:3000](http://localhost:3000)

### 5. Run the frontend
Open a new terminal window/tab:
```bash
cd frontend
npm run dev
```
The frontend will start on [http://localhost:5173](http://localhost:5173) (or the port Vite specifies)

## Usage
- Visit the homepage to see the list of products.
- Click the "+" button in the navbar or "Create a product" link to add a new product.
- Delete products using the trash icon on each product card.
- Toggle the sun or moon feature to make the website night mode or day mode

## Project Structure
```
fullstack-sample-proj/
├── backend/           # Express/MongoDB API
├── frontend/          # React/Chakra UI app
└── README.md
```

## Notes
- Do **not** commit your real `.env` file. Use `.env.example` for sharing config structure.
- Make sure MongoDB is running and accessible from your backend.

## License
MIT
