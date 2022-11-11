const { Employe } = require("../../db/sequelize")

module.exports= (app) =>{
    app.get('/api/roqya_ci/getAll_employe/:id', (req, res) =>{
        console.log(req.params);
        return Employe.findAll({where:{CentreId: req.params.id}}).then(employes =>{
            const message =`tous les employés ont été récupérés avec succès`
            res.json({message, data: employes})
        }).catch(error =>{
            let message =`un petit problème avec le server réessayez dans un instant`;
            res.json({message: error.message, data: message})

        })
    })
}