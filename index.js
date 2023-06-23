const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const cors = require('cors');

//connecting to mongo db
mongoose.connect(MONGO_DB_CONFIG.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection to mongo db succesful');
}).catch((error) => {
    console.log('error in connecting to mongodb:', error);
}) 

//enabling cors
app.use(cors());

//middleware to parse json data
app.use(express.json());

//route to fetch data from
app.use("/api", require("./router/app.route"));

//start server
app.listen(8000, () => {
    console.log("server started on port 8000");
}); 