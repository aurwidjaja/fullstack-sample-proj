// backend/index.js
import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import productRoutes from "./routes/product.route.js"
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); //Allows us to accept JSON data as a request in the body

app.use("/api/products", productRoutes);

// Initially the endpoints we wrote were to the /api/products links as well,
// but since we've now removed productRoutes from index.js for modularity's sake
// we can now instead deleted "/api/products" from our api endpoints and replace them with "/"
// (refer to product.route.js)

app.listen(PORT, () => {
    connectDB();
    console.log("🚀 Server started at http://localhost:" + PORT);
});

//For the sake of modularity and cleanliness, we remove the 
// endpoints we've written them and put them in a routes file

