const { ValidationError, UniqueConstraintError } = require("sequelize");
const { TypeEmpl, Centre, Employe } = require("../../db/sequelize");

module.exports = (app) => {
    app.post('/api/roqya_ci/create_employe', (req, res) => {
        let centreBody = req.body;
        let { idCentre, idTypeEmploye, employe } = centreBody;
        
        let centre, type_employe, newEmploye;
        return Employe.create(employe, ).then(data =>{
            newEmploye = data;
            return Centre.findByPk(idCentre)

        })
        .then(data =>{
            centre = data
           return centre.addEmploye(newEmploye)
        }).then(data =>{
            res.json(data);
        })
        .catch(error => {

            if (error instanceof ValidationError) {
                res.status(404).json({ message: error.message, data: error })
            }
            if (error instanceof UniqueConstraintError) {
                res.status(4040).json({ message: error.message, data: error })
            }
            let message = `un petit problème avec le server réessayez dans un instant`;
            res.json({ message: error, data: message })

        })
    })
}

