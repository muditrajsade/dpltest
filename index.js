let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let cors = require('cors');


app.use(
    cors({
      origin: 'https://p-rosy-six.vercel.app', // Replace with your frontend's URL
      methods: 'GET,POST,PUT,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type,Authorization',
    })
  );
  app.options('*', cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/hello',function(req,res){
    res.json({message:"hello"})
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});