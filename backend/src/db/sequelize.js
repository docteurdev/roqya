const {Sequelize, DataTypes} = require('sequelize');

const CentreModel = require('../models/Centre');
const PatientModel = require('../models/Patient');
const EmployeModel = require('../models/Employe');
const TypeEmployeModel = require('../models/typeEmploye');
const RdvModel = require('../models/Rdv');

const sequelize = new Sequelize('roqya_app', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })

  const Centre = CentreModel(sequelize, DataTypes);
  const Patient = PatientModel(sequelize, DataTypes);
  const Employe = EmployeModel(sequelize, DataTypes);
  const TypeEmpl = TypeEmployeModel(sequelize, DataTypes);
  const RendezVous = RdvModel(sequelize, DataTypes)
 
  // relationship centre_patient
  Centre.hasMany(Patient);
  // Patient.belongsTo(Centre);
  

  // relationship centre_employe

  Centre.hasMany(Employe);
   Employe.belongsTo(Centre);

  // relationship typeemploye_employe

  // TypeEmpl.hasMany(Employe);
  // Employe.belongsTo(TypeEmpl);
  
  // relationship RendezVous Patient
  Patient.hasMany(RendezVous);
   RendezVous.belongsTo(Patient)

  // relationship patient_employe;
  const activeEmploye = sequelize.define('active_employe',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: DataTypes.STRING,
        autoIncrement: true,

    }
  },{
    timestamps: false,
  })

  // Employe.belongsToMany(Patient,{through: activeEmploye});
  // RendezVous.belongsToMany(Employe,{through: activeEmploye});



  const connectDb = () =>{
     return sequelize.sync({alter: true}).then(_ =>{
    //   Centre.bulkCreate([
    //     {
    //       nom: "centre de youp",
    //       contact: "01235676",
    //       localite: 'yopougon bonykro',
    //       siteWeb: "www.gigi.com",
    //       email: "mail@g.com",
    //       facebook: "fce.com",
    //       youtube: 'tube.ci'
    //    },
    //    {
    //     nom: "centre abobo",
    //     contact: "01235676",
    //     localite: 'abobo mairie',
    //     siteWeb: "www.gigi.com",
    //     email: "mail@g.com",
    //     facebook: "fce.com",
    //     youtube: 'tube.ci'
    //  },
    // ])

    let _centre, _employe;

    // const empl1 = Employe.create({
    //   typeEmploye: 1,
    //   nom:"souleiman",
    //   prenom: "konate",
    //   contact: "1235646"
    // })
      //  return Centre.findByPk(1)

     }).then(data =>{
    //   _centre = data;
    //     return  Employe.create({
    //         typeEmploye: 1,
    //         nom:"souleiman",
    //         prenom: "konate",
    //         contact: "1235646"
    //       })
    //  }).then(data =>{
    //    _employe = data;
    //   return (() =>{
    //     _centre.addEmploye(_employe)

    //   })()
      // console.log(_employe.toJSON());

     })

  }

  sequelize.authenticate()
            .then(_ => console.log("t'es connecté à roqya_app"))
            .catch(error => console.log(error));


            module.exports= {connectDb, Centre, Patient, Employe, TypeEmpl, RendezVous};