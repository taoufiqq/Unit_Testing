
const con = require('./db/connection');

const app = require("./app");
const port = process.env.PORT || 8080;



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 


