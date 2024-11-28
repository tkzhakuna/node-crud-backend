const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors = require('cors');
const bookRoutes=require('./routes/book.routes');

app.use(cors());

app.use(express.json());
app.use('/api',bookRoutes);

const PORT=process.env.PORT || 8081;
const MONGODB_URI='mongodb://mongo:27017/library';

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`)))
    .catch(err=>console.error('MongoDB connection error:',err));