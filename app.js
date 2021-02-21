const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

require('dotenv').config()

const con = require('./db/connection');




app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())










const ownerRoute = require('./routes/owner');
const agenceRoute = require('./routes/agence');
const compteRoute = require('./routes/compte');
const creditCardRoute = require('./routes/creditCard');
const gabOperationRoute = require('./routes/gabOperation');
const monneyProviderRoute = require('./routes/monneyProvider');
const uploadSumRoute = require('./routes/uploadSum');

app.use('/owner' ,ownerRoute);
app.use('/agence' ,agenceRoute);
app.use('/creditCard' ,creditCardRoute);
app.use('/gabOperation' ,gabOperationRoute);
app.use('/compte' ,compteRoute);
app.use('/monneyProvider' ,monneyProviderRoute);
app.use('/uploadSun' ,uploadSumRoute);



module.exports =app;

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   }) 



