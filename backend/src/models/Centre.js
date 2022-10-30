module.exports= (sequelize, DataTypes) =>{
  return  sequelize.define('Centre',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        localite:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        siteWeb:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        facebook:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        youtube:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: false,
        created_at: 'created',
        updateda_t: false
      })
}