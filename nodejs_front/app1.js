const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const userController = require ('./controllers/user.controller.js')
const dbConfig = require ('./config/db.config.js');
const serverConfig = require ('./config/server.config.js');
var cors = require('cors');


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded())


// connection to databse mongo
mongoose.connect('mongodb://Safare:Safare78@ds113849.mlab.com:13849/data-b2', (err) => {
    if(err) {
        console.log('database not connected');
    }
    else{
        console.log('database connected');
    }
});

// initial route
app.get('/:name?', (req,res) => {
    if(req.params.name){
        res.send(`
            <h1>hello ${req.params.name}</h1>
            `);
    }
    else {
        res.send(`<p>Je ne parviens pas à vous identifier</p> `);
    }

});

// users routes
app.post(`/${serverConfig.rootUrl}/${serverConfig.version}/users`, userController.createUser);
app.get(`/${serverConfig.rootUrl}/${serverConfig.version}/users`, userController.getUsers);
app.put(`/${serverConfig.rootUrl}/${serverConfig.version}/users/:id`,userController.updateUser);
app.delete(`/${serverConfig.rootUrl}/${serverConfig.version}/users/:id`,userController.deleteUser);
app.get(`/${serverConfig.rootUrl}/${serverConfig.version}/users/delete/:firstname`,userController.deleteManyUsers);
app.get(`/${serverConfig.rootUrl}/${serverConfig.version}/users/update/:data/:newdata`,userController.updateManyUsers);
app.get(`/${serverConfig.rootUrl}/${serverConfig.version}/users/:id`, userController.getUser);
app.get(`/${serverConfig.rootUrl}/${serverConfig.version}/users/:id/sayHello`, userController.sayHello);

const port = serverConfig.port;

app.listen(port, () => {
    console.log(`server on port ${port}`);
});
