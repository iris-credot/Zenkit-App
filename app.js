const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const async= require('express-async-errors');
const app = express();
const port= process.env.PORT || 5000;
const assert = require('assert');
const swaggerUi=require ( 'swagger-ui-express') ;
const route = require("./routes/taskroutes.js");
const swaggerjson= require ('./dos/swagger.json');
assert.strictEqual(typeof swaggerjson, 'object');


app.use(express.json())
const corsOptions={
    allowedHeaders:["Authorization","Content-Type"],
    methods:["GET","POST","DELETE"],
    origin:[]
}

app.use(cors(corsOptions));
app.use('/zenkit',route);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerjson));




mongoose.connect("mongodb://localhost:27017/Task_Manager")
.then(() => {
    app.listen(port,()=>{
        console.log("Mongo DB connected....")
        console.log(`Server running on ${port}...`);
    })
})
.catch((err) => console.log(err));






