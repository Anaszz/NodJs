const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let SalarieSchema = new Schema ({
    nom: String,
    prenom: String,
    username: String,
    date_naiss: {
     jour: Number,
     mois: Number,
     an: Number
    },
    adresse: {
       rue: String,
       ville: String,
       postal: Number 
    },
    tel: Number,
    mail: String,
    poste: String
    
});

module.exports = mongoose.model('Salarie' , SalarieSchema);
