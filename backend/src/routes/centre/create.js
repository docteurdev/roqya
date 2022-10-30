const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Centre } = require("../../db/sequelize")

module.exports = (app) =>{
  app.post('/api/roqya_ci/create_center', (req, res) =>{
    return Centre.create(req.body).then(centre =>{
        let message =`le centre ${centre.nom} est ajouté`;
        res.json({message, data: centre})
    }).catch(error =>{
       if(error instanceof ValidationError){
         res.status(404).json({message: error.message, data: error})
       }
       if(error instanceof UniqueConstraintError){
        res.status(4040).json({message: error.message, data: error})
      }
      let message =`un petit problème avec le server réessayez dans un instant`;
      res.json({message: error, data: message})
})
  })
}