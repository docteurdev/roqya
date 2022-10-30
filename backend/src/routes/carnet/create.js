const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Patient, Centre } = require("../../db/sequelize")

module.exports= (app) =>{
    app.post('/api/roqya_ci/carnet_create', (req, res) =>{
        const {centreId, patient} = req.body;
        let newPatient, centre;

       return Patient.create(patient)
      .then(data =>{
        newPatient = data;
        return Centre.findByPk(centreId)

    }).then(data =>{
        centre = data;
        centre.addCarnet(newPatient)
        const  message=`vous avez ajouter un nouveau patient`;
        res.json({message, data: newPatient})
       })
       .catch(error =>{
            if(error instanceof ValidationError){

                res.json({message: error, data: error.message})
            }
            if(error instanceof UniqueConstraintError){

                res.json({message: error, data: error.message})
            }
            const  message=`veuillez réessayer dans un instant`;
            res.json({message: error, data: message})
    
       })
    })
}