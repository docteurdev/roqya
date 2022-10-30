const { Employe } = require("../../db/sequelize")

module.exports= (app) =>{
    app.get('/api/roqya_ci/getAll_employe/:id', (req, res) =>{
        let id = req.params.id;
        
        return Employe.findByPk(id).then(employe =>{
            if(employe){

                const message =`tous l'employé ${employe.nom} a été récupéré avec succès`
                res.json({message, data: employe})
            }else{
                const message =`ce employé n'eixste pas dans votre bd`
                res.json({message, data: employe})
            }
        }).catch(error =>{
            let message =`un petit problème avec le server réessayez dans un instant`;
            res.json({message: error.message, data: message})

        })
    })
}