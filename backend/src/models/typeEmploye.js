module.exports=(sequelze, DataTypes) =>{
    return sequelze.define('typeemploye', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typeEmploye:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })}