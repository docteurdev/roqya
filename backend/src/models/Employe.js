module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Employe', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        typeEmploye:{
            type: DataTypes.INTEGER,
            allowNull: false
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