const { Centre } = require("../../db/sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = require('../../auth/private_key');

module.exports=(app) =>{
    app.post('/login/centre', (req, res) =>{
        Centre.findOne({where:{userName: req.body.userName}})
        .then(centre =>{
            if(!centre){
                const message="l'utilisateur demandé n'exsiste pas";
              return  res.status(404).json(message)
            }

            bcrypt.compare(req.body.password, centre.password).then(isPasswordValid =>{
                if(!isPasswordValid){
                    const message="le mot de passe est incorrecte";
                    req.status(401).json({message})
                }else{

                    // jwt
                    const token= jwt.sign({userId: centre.id}, privateKey, {expiresIn:'24'});
                    const message = `l'espace ${centre.nom} est ouvert`;
                    const retreiveCenter ={
                        id: centre.id,
                        userName: centre.userName,
                        password: "",
                        nom: centre.nom,
                        contact: centre.contact,
                        localite: centre.localite,
                        siteWeb: centre.siteWeb,
                        email: centre.email,
                        facebook: centre.facebook,
                        youtube: centre.youtube
                }
                console.log(retreiveCenter);
                    return res.json({message, data: retreiveCenter, token})

                }
            })

        })
    })
}