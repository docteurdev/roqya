const { Employe } = require("../../db/sequelize")

module.exports= (app) =>{
    app.get('/api/roqya_ci/getAll_employe', (req, res) =>{
        
        return Employe.findAll().then(employes =>{
            const message =`tous les employés ont été récupérés avec succès`
            res.json({message, data: employes})
        }).catch(error =>{
            let message =`un petit problème avec le server réessayez dans un instant`;
            res.json({message: error.message, data: message})

        })
    })
}