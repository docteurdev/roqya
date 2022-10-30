const { Patient } = require("../../db/sequelize")

module.exports = (app) =>{
    app.get('/api/roqya_ci/getAll_patients', (req, res) =>{
        Patient.findAll()
        .then(patients =>{
            let message;
            if(patients){
                message ='tous les patients ont été récupérés avec succès';
                res.json({message, data: patients})
            }
            message= "vous n'avez pas de patients enregistrés";
            res.json(message)
        }).catch(error =>{
            const  message=`veuillez réessayer dans un instant`;
            res.json({message: error, data: message})


        })
    })
}