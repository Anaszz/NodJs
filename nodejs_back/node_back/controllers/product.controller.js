const Product = require ('../models/product.model');


exports.createProduct = function (req, res) {  
    let product = new Product(
        {
            name : req.body.name ,
            description: req.body.description ,
            prix: req.body.prix ,
            tva: req.body.tva      
        }
    );


    product.save((err) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
             console.log("Product created");
            
        }
       res.send(product);
    })
};


exports.getProductAll = function (req, res) {
    Product.find( function (err, product) {
          if(err)
        {
            console.log(err);
        }
        res.send(product);
    })
};



exports.getProduct = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
          if(err)
        {
            console.log(err);
        }
        res.send(product);
    })
};

exports.productDelete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
       if(err)
        {
            console.log(err);
        }
         else
        {
             console.log("Product Deleted");
            
        }
        
        res.send('Product Deleted');
      
    })
};  

exports.productUpdate = function (req, res) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
          if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Product Updated");
            
        }
        
        res.send('Product Udpated');

    })
};

