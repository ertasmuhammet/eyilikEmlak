const express = require('express')

const multer = require('multer')

const app = express()

app.use(express.static('src/assets'))

var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assets/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending extension
  },
})

var upload = multer({ storage: storage }).single('file');

var multipleUpload = multer({ storage: storage }).array('files')

app.post('/file',(req,res) => {
    upload(req,res , (err) => {
        if (err) {
            console.log(err);
        }
        console.log(req.file.path);
        console.log(Date.now())
        
    })

})

app.post('/files',(req,res) => {
  multipleUpload(req,res , (err) => {
      if (err) {
          console.log(err);
      }
      console.log(req.files);
      console.log(Date.now())
      
  })

})

app.listen(3500,() => {
    console.log("App is listening 3500");
})