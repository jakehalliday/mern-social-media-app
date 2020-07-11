const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.listen(4000, ()=>{
    console.log('Server running on port 4000.')
});