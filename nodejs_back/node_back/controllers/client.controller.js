const Client = require ('../models/client.model');


exports.createClient = function (req, res) {  
    let client = new Client(
        {
            nom_entreprise : req.body.nom_entreprise ,
            adresse: req.body.adresse ,
            secteur: req.body.secteur ,
            contact: req.body.contact 
           
            
        }
    );


    client.save((err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
             console.log("Client created");
            
        }
       res.send(client);
    })
};


exports.getClientAll = function (req, res) {
    Client.find( function (err, client) {
          if(err)
        {
            console.log(err);
        }
        res.send(client);
    })
};



exports.getClient = function (req, res) {
    Client.findById(req.params.id, function (err, client) {
          if(err)
        {
            console.log(err);
        }
        res.send(client);
    })
};

exports.clientDelete = function (req, res) {
    Client.findByIdAndRemove(req.params.id, function (err) {
       if(err)
        {
            console.log(err);
        }
         else
        {
             console.log("Client Deleted");
            
        }
        
        res.send('Client Deleted');
      
    })
};  

exports.clientUpdate = function (req, res) {
    Client.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, client) {
          if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Client Updated");
            
        }
        
        res.send('Client Udpated');

    })
};

