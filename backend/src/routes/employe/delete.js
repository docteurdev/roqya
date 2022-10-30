const { Employe } = require("../../db/sequelize")

module.exports = (app) =>{
    app.delete('/api/roqya_ci/delete_employe/:id', (req, res) =>{
        const id = req.params.id;
        let employeDeleted ;
        return Employe.findByPk(id).then(data =>{
            if(data){
                employeDeleted = data;
                return Employe.destroy({where:{id: id}})

            }
           return res.json("l'employé que vous voullez supprimer n'existe pas")

        }).then(_ =>{
            let message =`l'employe  ${employeDeleted} a été supprimé avec succès`;
            res.json({message, data: message})

        })
    })
}