const { request } = require('express');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const Router = express.Router();
const productRouter = require('./Routes/productRouter');

const server = app.listen(8080, () => console.log('server up!'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', './views');
//app.set('view engine', 'ejs');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('create-product');
});
app.use('/productos', productRouter);
