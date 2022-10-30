const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Centre } = require("../../db/sequelize")

module.exports = (app) =>{
    app.put("/api/roqya_ci/update_center/:id", (req, res) =>{
        const idCentre = req.params.id;
       return Centre.update(req.body,{where: {id: idCentre}})
       .then(_ =>{
            
             Centre.findByPk(idCentre).then(centre =>{

            let message =`le centre ${centre.nom} a été modifié`;
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
    })
}