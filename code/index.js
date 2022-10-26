const express = require('express');
const morgan =require('morgan');
const handlebars =require('express-handlebars');
const path =require('path');
const port = 3000;
const app = express();
const hbs = handlebars.create({ defaultLayout:'main' ,extname: '.hbs'});


const route=require('./routes');
const dbs=require('./config/db');

//connect db
dbs.connect();  

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));


app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

//route 
route(app);



app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/home`)
})