const express=require('express');
const cors=require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB using mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lsdr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB with mongoose!'))
.catch((err) => console.error('MongoDB connection error:', err));

const questionRoutes = require("./routes/QuestionRoutes");
app.use('/api/questions', questionRoutes);
const resultsRoutes = require('./routes/resultRoutes');
app.use("/api/results", resultsRoutes);


app.get('/',(req,res)=>{
    res.send('Hello from server!');
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})