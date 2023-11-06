const express = require('express');
const mongoose = require('mongoose');
const User= require('./models/userModel')
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

const dbURL = 'mongodb+srv://testuser:xWo1D59QvC9O6qdW@cluster0.hzjsu9z.mongodb.net/?retryWrites=true&w=majority';

app.get('/', (req,res) =>{
	res.send('hello')
})

app.get('/Sasha', (req,res) =>{
	res.send('hello fortnite gamers')
})

app.post('/User', async(req,res)=> {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user);
  } catch (error) { 
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})


mongoose.connect(dbURL)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, ()=> {
      console.log("app is running on port 3000")
    })
  })
  .catch((error) => {
    console.log(error)
  })



