module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Carnet',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date_naissance:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sexe:{
            type: DataTypes.STRING,
            allowNull: false
        },
        profession:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        religion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        s_matrimoniale:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ante_medicaux:{
            type: DataTypes.STRING,
            allowNull: false
        },
       

    },{
        timestamps: false,
        created_at: 'created',
        updated_at: false
      })
}