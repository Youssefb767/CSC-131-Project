const express = require('express');
const mongoose = require('mongoose');
const User= require('./models/userModel')
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const dbURL = 'mongodb+srv://testuser:xWo1D59QvC9O6qdW@cluster0.hzjsu9z.mongodb.net/?retryWrites=true&w=majority';

app.get('/', (req,res) =>{
	res.send('hello')
})

app.get('/Sasha', (req,res) =>{
	res.send('hello fortnite gamers')
})

app.get('/Users', async(req,res) => {
  try {
      const users= await User.find({});
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({message: error.message})
  }

})

app.get('/Users/:id', async(req,res) => {
  try {
      const {id} = req.params;
      const user= await User.findById(id);
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({message: error.message})
  }

})

app.post('/Users', async(req,res)=> {
  try {
     const user = await User.create(req.body)
     res.status(200).json(user);
  } catch (error) { 
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.delete('/Users/:id', async(req,res)=>{
  try {
    const {id}= req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
      return res.status(404).json({message: 'cannot find any user with that ID ${id}'})
  }
})

//update product
app.put('/Users/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);
      if(!user){
        return res.status(404).json({message: 'cannot find any product with ID ${id}'})
      }
      const updatedUser = await User.findById(id);
      res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message} )
    
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



