const { ValidationError, UniqueConstraintError } = require("sequelize");
const { RendezVous, Patient } = require("../../db/sequelize");

module.exports= (app) =>{
    app.post("/api/roqya_ci/rdv_create", (req, res) =>{
        const {carnetId, rdv} = req.body;
        let patient, newRdv;
        //  console.log(carnetId, rdv);

       return RendezVous.create(rdv)
        .then(data =>{
            newRdv = data;
            return Patient.findByPk(carnetId)
        }).then(data =>{
            patient = data;
            console.log(patient);
            patient.addRdv(newRdv)
            let message = `un nouveau rdv est fixé pour ${patient.nom}`
           return res.json({message, data: newRdv})
        })
    //     .catch(error =>{
    //         if(error instanceof ValidationError){

    //             res.json({message: error, data: error.message})
    //         }
    //         if(error instanceof UniqueConstraintError){

    //             res.json({message: error, data: error.message})
    //         }
    //         const  message=`veuillez réessayer dans un instant`;
    //         res.json({message: error, data: message})
    
    //    })
    })
}