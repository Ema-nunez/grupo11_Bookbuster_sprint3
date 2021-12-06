const express = require("express");
const path = require('path');
const app = express();
const mainRutas = require('./src/routes/mainRutas')
const userRutas = require('./src/routes/userRutas')
const productRutas = require('./src/routes/productRutas')
app.use(express.static("./src/public"));

app.set('views',__dirname + '/src/views');
app.set('view engine', 'ejs');




app.use('/', mainRutas);

app.use('/users', userRutas)

app.use('/products', productRutas)



app.listen(3000, () => {
  console.log("El servidor inicio correctamente");
});