const { Centre } = require("../../db/sequelize")

module.exports= (app) =>{
    app.delete('/api/roqya_ci/delete_center/:id', (req, res) =>{
        let id = req.params.id;

        Centre.findByPk(id).then(centre =>{
            let centreDeleted = centre;
            return Centre.destroy({where: {id: id}}).then(_ =>{

                let message =`le centre ${centreDeleted.nom} a été supprimé avec succès`;
                res.json({message, data: centre})
        
            }).catch(error =>{
                let message =`un petit problème avec le server réessayez dans un instant`;
                res.json({message: error.message, data: message})
            })

        })
    })
}