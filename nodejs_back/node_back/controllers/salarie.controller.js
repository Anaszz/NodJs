const Salarie = require ('../models/salarie.model');


exports.createSalarie = function (req, res) {  
    let salarie = new Salarie(
        {
            nom : req.body.nom ,
            prenom: req.body.prenom ,
            username: req.body.username ,
            date_naiss: req.body.date_naiss,
            adresse: req.body.adresse,
            tel: req.body.tel,
            mail: req.body.mail,
            poste: req.body.poste
           
            
        }
    );


    salarie.save((err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
             console.log("Salarie created");
            
        }
       res.send(salarie);
    })
};


exports.getSalarieAll = function (req, res) {
    Salarie.find( function (err, salarie) {
          if(err)
        {
            console.log(err);
        }
        res.send(salarie);
    })
};



exports.getSalarie = function (req, res) {
    Salarie.findById(req.params.id, function (err, salarie) {
          if(err)
        {
            console.log(err);
        }
        res.send(salarie);
    })
};

exports.salarieDelete = function (req, res) {
    Salarie.findByIdAndRemove(req.params.id, function (err) {
       if(err)
        {
            console.log(err);
        }
         else
        {
             console.log("Salarie Deleted");
            
        }
        
        res.send('Salarie Deleted');
      
    })
};  

exports.salarieUpdate = function (req, res) {
    Salarie.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, salarie) {
          if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Salarie Updated");
            
        }
        
        res.send('Salarie Udpated');

    })
};

