const { Centre } = require("../../db/sequelize")

module.exports = (app) =>{
    app.get('/api/roqya_ci/getAll_center/:id', (req, res) =>{
        Centre.findByPk(req.params.id).then(centre =>{
            let message =`le centre ${centre.nom} est récupéré`;
            res.json({message, data: centre})
        }).catch(error =>{

            let message =`un petit problème avec le server réessayez dans un instant`;
            res.json({message: error.message, data: message})

        })
    })
}