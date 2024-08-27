const express = require('express');
const app = express();
const apiKey = require('./router/apiKey-route');
const cors = require('cors');
const connectDb = require('./utils/db');


app.use(cors());
app.use(express.urlencoded())
app.use(express.json());

app.use('/apiKey',apiKey)

connectDb().then(()=>{
    app.listen(8080,()=>{
        console.log('server is running on port 8080');
     })
})