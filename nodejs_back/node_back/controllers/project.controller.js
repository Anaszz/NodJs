const Project = require ('../models/project.model');


exports.createProject = function (req, res) {  
    let project = new Project(
        {
            nom : req.body.nom ,
            description: req.body.description ,
            date_deb: req.body.date_deb ,
            date_fin: req.body.date_fin, 
            montant: req.body.montant, 
            statut: req.body.statut 
                   
        }
    );


    project.save((err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
             console.log("Project created");
            
        }
       res.send(project);
    })
};


exports.getProjectAll = function (req, res) {
    Project.find( function (err, project) {
          if(err)
        {
            console.log(err);
        }
        res.send(project);
    })
};



exports.getProject = function (req, res) {
    Project.findById(req.params.id, function (err, project) {
          if(err)
        {
            console.log(err);
        }
        res.send(project);
    })
};

exports.projectDelete = function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err) {
       if(err)
        {
            console.log(err);
        }
         else
        {
             console.log("Project Deleted");
            
        }
        
        res.send('Project Deleted');
      
    })
};  

exports.projectUpdate = function (req, res) {
    Project.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, project) {
          if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Project Updated");
            
        }
        
        res.send('Project Udpated');

    })
};

