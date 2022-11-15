//Se declara express con el modulo 3rd party expressjs
const express = require	('express');
//Se declara bodyParser con el modulo 3rd party body-parser
const bodyParser = require('body-parser');
//Se declara path node core module
const path = require('path');

//My exports
const rootDir = require('./utilities/path');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorControllers = require('./controllers/error');
//Declaro app con el method express() que trae un obj
const app = express();

//Setea en especial key 'view engine' a 'ejs' como default template engine
app.set('view engine', 'ejs');


//Parser
app.use(bodyParser.urlencoded({extended:false}));

//Static method for presenting CSS
app.use(express.static(path.join(rootDir, 'public')));


//Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorControllers.get404);
//Server
app.listen(3000);
