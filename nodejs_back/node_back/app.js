const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const clientController = require ('./controllers/client.controller.js');
const productController = require ('./controllers/product.controller.js');
const salarieController = require ('./controllers/salarie.controller.js');
const projectController = require ('./controllers/project.controller.js');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json());

app.use( function (req, res , next) {
    res.setHeader('Content-type','application/json');
    res.setHeader('Accept','application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PATCH,OPTIONS,PUT');
    res.setHeader('Access-Control-Allow-Headers','Origin, Accept, Authorization, X-Requested-With, Content-type, Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

mongoose.connect('mongodb://Safare:Safare78@ds113849.mlab.com:13849/data-b2', (err) => {
    if(err){
        console.log('database not connected');
    }
    else{
        console.log('database connected');
    }
});

app.get('/', (req, res) =>{
    res.send('Hello world');
});


app.post('/product/create', productController.createProduct);
app.get('/product/:id', productController.getProduct);
app.get('/product', productController.getProductAll);
app.put('/product/update/:id', productController.productUpdate);
app.delete('/product/delete/:id', productController.productDelete);

app.post('/client/create', clientController.createClient);
app.get('/client/:id', clientController.getClient);
app.get('/client', clientController.getClientAll);
app.put('/client/update/:id', clientController.clientUpdate);
app.delete('/client/delete/:id', clientController.clientDelete);

app.post('/salarie/create', salarieController.createSalarie);
app.get('/salarie/:id', salarieController.getSalarie);
app.get('/salarie', salarieController.getSalarieAll);
app.put('/salarie/update/:id', salarieController.salarieUpdate);
app.delete('/salarie/delete/:id', salarieController.salarieDelete);

app.post('/project/create', projectController.createProject);
app.get('/project/:id', projectController.getProject);
app.get('/project', projectController.getProjectAll);
app.put('/project/update/:id', projectController.projectUpdate);
app.delete('/project/delete/:id', projectController.projectDelete);

const port = 3000;

app.listen(port, () => {
           console.log(`Server on on port ${ port}`);
    
           });