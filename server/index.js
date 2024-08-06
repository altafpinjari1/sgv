const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectdb');
const admissionRoutes = require('./routes/admission');
const queryRoutes = require('./routes/query');
const uploadRoutes = require('./routes/upload'); // Import upload.js
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/admission', admissionRoutes);
app.use('/api/query', queryRoutes);
app.use('/api', uploadRoutes); // Use uploadRoutes for /api routes

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
