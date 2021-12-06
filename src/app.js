const express = require("express");
const app = express();
const mainRutas = require('./routes/mainRutas')
const userRutas = require('./routes/userRutas')
app.use(express.static("../public"));
app.set('view engine', 'ejs');




app.use('/', mainRutas);

app.use('/login', userRutas)


app.listen(3000, () => {
  console.log("El servidor inicio correctamente");
});