const { Centre } = require("../../db/sequelize")

module.exports = (app) =>{
    app.get('/api/roqya_ci/getAll_center', (req, res) =>{
       return Centre.findAll().then(centres =>{
            
            let message =`les centres ont été récupérer avec succès`;
            res.json({message, data: centres})
    
        }).catch(error =>{
            let message =`un petit problème avec le server réessayez dans un instant`;
            res.json({message: error.message, data: message})

        })
    })
}