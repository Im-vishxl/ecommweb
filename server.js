const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection string for local instance
const uri = process.env.MONGO_URI; 

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Endpoint to get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the database
        res.json(products); // Send the products as a JSON response
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Error fetching products");
    }
});

app.get('/api/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId); // Fetch product by ID from the database
        if (!product) {
            return res.status(404).send("Product not found"); // Handle case where product is not found
        }
        res.json(product); // Send the product as a JSON response
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).send("Error fetching product");
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
