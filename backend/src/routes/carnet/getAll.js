const { Patient, RendezVous } = require("../../db/sequelize")

{module.exports = (app) =>{
    app.get('/api/roqya_ci/getAll_patients/:idcentre',  (req, res) =>{
       return  Patient.findAll({where:{CentreId: req.params.idcentre}, include:[{model: RendezVous}]})
        .then(patients =>{
            let message;
            if(patients){
                message ='tous les patients ont été récupérés avec succès';
              return  res.json({message, data: patients})
            }
            message= "vous n'avez pas de patients enregistrés";
           return res.json(message)
        })
        .catch(error =>{
            const  message=`veuillez réessayer dans un instant`;
            res.status(500).json({message, data: error})


        })
    })
}}

