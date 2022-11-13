const express = require	('express');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();

const rootDir = require('./utilities/path');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');



//Parser
app.use(bodyParser.urlencoded({extended:false}));
//Static method for presenting CSS
app.use(express.static(path.join(rootDir, 'public')));

//Routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
//Server
app.listen(3000);