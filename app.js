const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const async= require('express-async-errors');
const app = express();
const port= process.env.PORT || 5000;
const connection = process.env.MONGODB_URI || 'mongodb+srv://tetairiscredot:Niwenshuti250@cluster0.kf5osqc.mongodb.net/Zenkit-App?retryWrites=true&w=majority&appName=Cluster0'
const assert = require('assert');
const swaggerUi=require ( 'swagger-ui-express') ;
const route = require("./routes/taskroutes.js");
const swaggerjson= require ('./dos/swagger.json');
const error = require('./middleware/errorhandling.js');
assert.strictEqual(typeof swaggerjson, 'object');



app.use(express.json())
/*const corsOptions={
    origin: function (origin, callback) {
        if (origin === 'http://192.168.1.150:8080') {
          callback(null, true);
        }
    },
    allowedHeaders:["Authorization","Content-Type"],
    methods:["GET","POST","PATCH","DELETE"]
};
const corsOthers={
    origin: function (origin, callback) {
        if (origin === '"https://zenkit-app.onrender.com/"') {
          callback(null, true);
        }
    },
    allowedHeaders:["Authorization","Content-Type"],
    methods:["GET"]
   
}
app.use(cors(corsOptions,corsOthers));*/
app.use('/zenkit',route);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerjson));




mongoose.connect(connection)
.then(() => {
    app.listen(port,()=>{
        console.log("Mongo DB connected....")
        console.log(`Server running on ${port}...`);
    })
})
.catch((err) => console.log(err));
app.use(error);





