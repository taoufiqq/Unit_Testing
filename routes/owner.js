const express = require('express')
const Owner = require('../db/models/owner.model');
const router = express.Router();





router.get('/', (req,res) =>{
  
  Owner.find()
  .then((Owner) => res.json(Owner))
  .catch((err) => res.status(400).json("Error :" + err));

});




router.route("/add").post((req, res) => {
  
  const full_name = req.body.full_name;

  const phone = req.body.phone;
  
  const cin = req.body.cin;


    // Validate Request
    if(!full_name || !phone || !cin) {
      return res.status(400).send({
          message: "filde content can not be empty"
      });
  }

   
  
    const OwnerPush = new Owner({
      
      full_name,
      phone,
      cin
     
    });
  
    OwnerPush
      .save()
      .then((data) => {
        res.send(data);
        res.json("Owner successfully added")
        
      }).catch((err) =>  res.status(400).json("Error :" + err));
     
  });



router.route("/update/:id").put((req, res) => {


  const full_name = req.body.full_name;

  const phone = req.body.phone;
  
  const cin = req.body.cin;


  // Validate Request
  if(!full_name || !phone || !cin) {
    return res.status(400).send({
        message: "filde content can not be empty"
    });
}

    // Find  and update it with the request body

    Owner.findByIdAndUpdate(req.params.id,{
      full_name: full_name,
      phone: phone,
      cin: cin,

    },{new: true})

    .then(owner => {
      if(!owner) {

        return res.status(404).send({
          message: "Owner not found with id " + req.params._id
      });

      }
      res.send(owner);
    }).catch(err => {

      if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "owner not found with id " + req.params.id
        });                
    }
    return res.status(500).send({
        message: "Error updating owner with id " + req.params.id
    });

    })


})



router.route("/delete/:id").delete((req, res) => {

Owner.findByIdAndRemove(req.params.id)
.then(owner=> {
  if (!owner) {

    return res.status(404).send({
      message : "Owner not found with id " + req.params.id
    });
    
  }
  res.send({
    message : "Owner deleted successfully !" });
}).catch(err =>{
  if (err.kind === 'ObjectId' || err.name === 'NotFound') {

    return res.status(404).send({
      message : 'Owner not found with id ' + req.params.id
    });
    
  }
  return res.status(404).send({
    message : 'Could not delete note with id ' + req.params.id
  });
})
    



  
 
})



  


module.exports = router;