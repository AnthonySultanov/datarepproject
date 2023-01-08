const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoose = require('mongoose');
const urlmongo = "mongodb+srv://user:user@cluster0.g6hrvjr.mongodb.net/?retryWrites=true&w=majority";
//connect to database
mongoose
  .connect(urlmongo, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const db = mongoose.connection;
//movielistdb

const movieSchema = new mongoose.Schema({
    title: String,
    about: String,
    banner: String
  });
const moviedatabase = db.useDb('movielistdb');
  const movielistdb = moviedatabase.model('movielist', movieSchema);
  
  

app.post('/movies',async(req,res)=>{
    console.log(req.body);
  try{
    await movielistdb.create({
      title:req.body.title,
      about:req.body.about,
      banner:req.body.banner
    })
  }catch(error){
    console.log(error);
  res.send('Data Recieved');
  }
})

app.get('/movies', (req, res) => {
  movielistdb.find((error, data)=>{
      res.json(data);
    })
  })

  app.get('/movies/:id', (req, res)=>{
    console.log(req.params.id);
    movielistdb.findById(req.params.id,(error,data)=>{
      res.json(data);
    })
  })


  app.put('/movies/:id', (req, res)=>{
    console.log("Update: "+req.params.id);
  
    movielistdb.findByIdAndUpdate(req.params.id, req.body, {new:true},
      (error,data)=>{
        res.send(data);
      })
  })

  app.delete('/movies/:id',(req, res)=>{
    console.log('Deleting: '+req.params.id);
    movielistdb.findByIdAndDelete({_id:req.params.id},(error,data)=>{
      if(error){
        res.status(500).send(error);
      }
      res.status(200).send(data);
    })
  })
  
  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });


    app.listen(port, () => 
{
    console.log(`Example app listening at http://localhost:${port}`)
})