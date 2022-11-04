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
            allowNull: false,
            // get(){
            //     return this.getDataValue('symptome').split(',')
            // },
            set(symptome){
                 this.setDataValue('symptome', symptome.join())
            }
        },
        ventouse:{
            type: DataTypes.STRING,
            allowNull: false,
            // get(){
            //     return this.getDataValue('ventouse').split(',')
            // },
            set(ventouse){
                this.setDataValue('ventouse', ventouse.join())
            }
        },
        remede:{
            type: DataTypes.STRING,
            allowNull: false,
            // get(){
            //     return this.getDataValue('remede').split(',')
            // },

            set(remede){
                this.setDataValue('remede',remede.join())
            }
        },

    },{
        timestamps: false,
        created_at: 'created',
        updated_at: false

    })
}