const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = require('../../auth/private_key');
const { Employe } = require('../../db/sequelize');

module.exports= (app) =>{
    app.post('/login/personels', (req, res) =>{
        Employe.findOne({where:{userName: req.body.userName}}).then(personel =>{
            if(!personel){
                const message= "ce utilisateur n'existe pas en base de donnéé";
                return res.status(404).json(message)
            }else{
                bcrypt.compare(req.body.password, personel.password).then(isPasswordValid =>{
                    if(!isPasswordValid){
                        const message= "mot de passe incorrect";
                        return res.status(404).json(message)
                    }else{
                    
                    const token= jwt.sign({userId: personel.id}, privateKey, {expiresIn: '24'} );
                    const message= "l'utilisateur est connecté";
                    const personelConnected= {
                        id: personel.id,
                        typeEmploye: personel.typeEmploye,
                        userName: personel.userName,
                        password: "",
                        nom:  personel.nom  ,
                        prenom: personel.prenom,
                        contact: personel.contact,
                        createdAt: personel.createdAt,
                        updatedAt: personel.updatedAt,
                        CentreId: personel.CentreId
                    }
                     return res.json({message, data: personelConnected, token})        
                    }
                })
            }
        })
    })
}