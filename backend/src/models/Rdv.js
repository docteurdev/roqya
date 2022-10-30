module.exports= (sequelize, DataTypes) =>{
    return sequelize.define('rdv',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        date_consultation:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date_rdv:{
            type: DataTypes.STRING,
            allowNull: false
        },
        symptome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ventouse:{
            type: DataTypes.STRING,
            allowNull: false
        },

    },{
        timestamps: false,
        created_at: 'created',
        updated_at: false

    })
}