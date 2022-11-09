module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Employe', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        typeEmploye:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
        userName:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:{msg: "ce nom est deja pris par un autre personel"}

        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,

        },
        nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contact:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}