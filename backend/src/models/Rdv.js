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
        secretaire:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rakis:{
            type: DataTypes.STRING,
            allowNull: false
        },
        symptome:{
            type: DataTypes.STRING,
            allowNull: false,
            get(){
                const getVal = this.getDataValue('symptome')
                return getVal?  getVal.split(','): null;
            },
            set(symptome){
                 this.setDataValue('symptome', symptome.join())
            }
        },
        ventouse:{
            type: DataTypes.STRING,
            allowNull: false,
            get(){
                const getVal= this.getDataValue('ventouse')
                return getVal? getVal.split(','): null
            },
            set(ventouse){
                this.setDataValue('ventouse', ventouse.join())
            }
        },
        remede:{
            type: DataTypes.STRING,
            allowNull: false,
            get(){
                const getVal= this.getDataValue('remede')
                return getVal?  getVal.split(','): null
            },

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