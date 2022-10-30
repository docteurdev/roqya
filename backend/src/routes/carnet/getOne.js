const { Patient } = require("../../db/sequelize")

module.exports = (app) =>{
    app.get('/api/roqya_ci/getAll_patients/:id', (req, res) =>{
        Patient.findByPk(req.params.id)
        .then(patient =>{
            let message;
            if(patient){
                message ='le patients a été récupéré avec succès';
                res.json({message, data: patient})
            }
            message= "le patients n'est pas  enregistré dans votre bd";
            res.json(message)
        }).catch(error =>{
            const  message=`veuillez réessayer dans un instant`;
            res.json({message: error, data: message})


        })
    })
}