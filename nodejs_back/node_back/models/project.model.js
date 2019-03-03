const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ProjectSchema = new Schema ({
    nom: String,
    description: String,
    date_deb: {
     jour: Number,
     mois: Number,
     an: Number
    },
    date_fin: {
     jour: Number,
     mois: Number,
     an: Number
    },
    montant: Number,
    statut: String

});

module.exports = mongoose.model('Project' , ProjectSchema);
