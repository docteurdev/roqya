const { ValidationError, UniqueConstraintError } = require("sequelize");
const { TypeEmpl } = require("../../db/sequelize")

module.exports= (app) =>{
    app.post('/api/roqya_ci/create_typeEmploye', (req, res) =>{
        return TypeEmpl.create(req.body).then(data =>{
            let message= `le type ${data.typEmploye} est ajouté avec succès`;
            res.json({message, data: data})
        }).catch(error =>{
            if(error instanceof ValidationError){
            res.status(404).json({message: error.message, data: error})

            }
            if(error instanceof UniqueConstraintError){
                res.status(4040).json({message: error.message, data: error})
    
            }
            let message =`un petit problème avec le server réessayez dans un instant`;
            res.status(500).json({message: error, data: message})

        })
    })
}