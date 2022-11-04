const { RendezVous } = require("../../db/sequelize")

module.exports= (app) =>{
    app.get("/api/roqya_ci/rdv_getAll", (req, res) =>{
        RendezVous.findAll().then(rdvs =>{
            let message ="tout les rendez-vous ont été récupéreés avec succès";
            res.json({message, data: rdvs})
        }).catch(error =>{
            let message =`un petit problème avec le server réessayez dans un instant`;
            res.json({message: error.message, data: message})

        })
    })
}