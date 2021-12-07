const express = require("express");

const app = express();
app.use(express.static('public'));
app.set('views',__dirname + '/src/views');
app.set('view engine', 'ejs');

const mainRutas = require('./src/routes/mainRutas')
const userRutas = require('./src/routes/userRutas')
const productRutas = require('./src/routes/productRutas')





app.use('/', mainRutas);

app.use('/users', userRutas)

app.use('/products', productRutas)

app.listen(3000, () => {
  console.log("El servidor inicio correctamente");
});