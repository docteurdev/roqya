const { ValidationError, UniqueConstraintError } = require("sequelize");
const { TypeEmpl, Centre, Employe } = require("../../db/sequelize");
const bcrypt = require('bcrypt');

module.exports = (app) => {
    app.post('/api/roqya_ci/create_employe', (req, res) => {
        let centreBody = req.body;
        let { idCentre, idTypeEmploye, employe } = centreBody;
        let centre, type_employe, newEmploye;

        bcrypt.hash(employe.password, 10).then(hash =>{

            let cretedEmplay= {
               ...employe,
               password: hash 
            }

            return Employe.create(cretedEmplay).then(data =>{
                newEmploye = data;
                console.log(newEmploye);
                return Centre.findByPk(idCentre)
    
            })
            .then(data =>{
                centre = data;
               return centre.addEmploye(newEmploye)
            }).then(data =>{
               return res.json(data);
            })
            .catch(error => {
    
                if (error instanceof ValidationError) {
                  return  res.status(404).json({ message: error.message, data: error })
                }
                if (error instanceof UniqueConstraintError) {
                    res.status(4040).json({ message: error.message, data: error })
                }
                let message = `un petit problème avec le server réessayez dans un instant`;
                res.json({ message: error, data: message })
    
            })
    

        })
        

    })
}

