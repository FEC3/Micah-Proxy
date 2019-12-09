const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('./'));

app.listen(PORT, (err) => {
  if(err){
    console.log(err);
  }else {
    console.log(`[Server] Started on port ${PORT}`);
  }
})