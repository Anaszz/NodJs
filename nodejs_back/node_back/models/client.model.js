const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ClientSchema = new Schema ({
    nom_entreprise: String,
    secteur: String,
    adresse: {
       rue: String,
       ville: String,
       postal: Number 
    },
    contact : {
       nom: String,
       prenom: String,
       tel: Number,
       mail: String
   } 

});

module.exports = mongoose.model('Client' , ClientSchema);
