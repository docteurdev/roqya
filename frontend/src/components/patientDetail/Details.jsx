import React, { useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import NewRdv from "../NewRdv";


const RdvContentItem = ({ type, value }) => {
  return (
    <div className="">
      <button style={{ backgroundColor: type === "sorcellerie" ? '#bc4e9c' : type === "ventouse" ? '#71B280' : "#134E5E" }} className=" bg-primary text-white rounded-xl font-semibold px-4 h-[25px] " > {value} </button>
    </div>
  )
}

const Rdv = ({ rdv }) => {
  const [rdvContent, setrdvContent] = useState(false);


  return (
    <div className="">
      <div style={{ minHeight: rdvContent ? 200 : 50, }} className="w-full p-2 transition-height rounded-lg mt-2 border-2 border-solid">
        <div className="rdv-header  flex justify-between items-center ">
          <h2 className="text-lg text-lef font-normal flex items-center ">
            <span className="font-semibold mr-2">Date:</span> <span> {rdv.date_rdv} </span>
          </h2>
          <h2 className="text-lg text-lef font-normal flex items-center ">
            <span className="font-semibold mr-2">Sécrétaire:</span> <span>{rdv.secretaire} </span>
          </h2>
          <h2 className="text-lg text-lef font-normal">
            <span className="font-semibold mr-2">Raki:</span> <span> {rdv.rakis} </span>
          </h2>
          <h2>
            {!rdvContent ? (
              <ChevronDownIcon
                onClick={() => setrdvContent(true)}
                className="w-6 p-1 h-6 bg-primary text-white rounded-full cursor-pointer ml-2"
              />
            ) : (
              <ChevronUpIcon
                onClick={() => setrdvContent(false)}
                className="w-6 p-1 h-6 bg-primary text-white rounded-full cursor-pointer ml-2"
              />
            )}
          </h2>
        </div>
        {rdvContent ? <div className="rdv-body mt-2">
          {/* divider */}
          <div className="w-full h-1 bg-slate-500 mb-2" />
          <div className=" flex gap-2">
            <div className=" w-[40%]">
              <h2 className="font-medium">Sorcelleries à traiter</h2>
            </div>
            <div className="w-screen flex flex-wrap gap-2">
              {

                rdv.symptome ? rdv.symptome.map((item, index) => <RdvContentItem key={index} type="sorcellerie" value={item} />) : null
              }

            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <div className=" w-[40%]">
              <h2 className="font-medium">Ventouses</h2>
            </div>
            <div className="w-screen flex flex-wrap gap-2">
              {

                rdv.ventouse ? rdv.ventouse.map((item, index) => <RdvContentItem key={index} type="ventouse" value={item} />) : null
              }
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <div className=" w-[40%]">
              <h2 className="font-medium">Rédemdes</h2>
            </div>
            <div className="w-screen flex flex-wrap gap-2">

              {

                rdv.remede ? rdv.remede.map((item, index) => <RdvContentItem key={index} type="remede" value={item} />) : null
              }

            </div>
          </div>



        </div> : null}

      </div>
    </div>
  );
};



function Details() {

  const [showInfo, setShowInfo] = useState(false);
  const patient = useSelector(state => state.patients.patient);
  // console.log(patient);
  const [addRdv, setAddRdv] = useState(false);

  
  return (
    <div>
      <div className="detail p-6">
        <div className="hearder relative">
          <h2 className="flex fixed top-0 left-0 p-2  w-full justify-betwee text-xl text-left mb-4 font-semibold flex items-center ">
            <p>Afficher les informations du patient</p>
            <div style={{width:"50%"}} className="flex justify-between items-center">
            {!showInfo ? (
              <ChevronDownIcon
                onClick={() => setShowInfo(true)}
                className="w-6 p-1 h-6 bg-primary text-white rounded-full cursor-pointer ml-2"
              />
            ) : (
              <ChevronUpIcon
                onClick={() => setShowInfo(false)}
                className="w-6 p-1 h-6 bg-primary text-white rounded-full cursor-pointer ml-2"
              />
            )}
             <label onClick={() =>{
              setShowInfo(false)
              setAddRdv(false)
              }} htmlFor="patient-detail-modal" className="btn btn-premary">Fermer</label>
            </div>
          </h2>

          {showInfo ? (
            <div className="mt-16">
              <div className="detail-header  flex justify-between gap-2">
                <div className="photo-box w-40 h-40 bg-primary rounded-md"></div>
                <div className="">
                  <div className="flex justify-between  w-[18rem]">
                    <h2 className="text-lg font-semibold ">{patient.nom} </h2>
                    <h2 className="text-lg font-semibold ">{patient.prenom}</h2>
                  </div>

                  <div className="flex justify-between items-center mt-2 w-[18rem]">
                    <h2 className="text-sm">Date de naissance</h2>
                    <h2
                      className="text-sm 
                        border-2 border-primary text-primary
                        border-dashed 
                        rounded-md px-6 py-2
                      "
                    >
                      {patient.date_naissance}
                    </h2>
                  </div>
                  <div className="flex justify-between items-center mt-2 w-[18rem]">
                    <h2 className="text-sm">Situation matrimoniale</h2>
                    <h2
                      className="text-sm 
                        border-2 border-primary text-primary
                        border-dashed 
                        rounded-md px-6 py-2
                      "
                    >
                      {patient.s_matrimoniale}
                    </h2>
                  </div>
                  <div className="flex justify-between items-center mt-2 w-[18rem]">
                    <h2 className="text-sm">Réligion</h2>
                    <h2
                      className="text-sm 
                        border-2 border-primary text-primary
                        border-dashed 
                        rounded-md px-6 py-2
                      "
                    >
                      {patient.religion}
                    </h2>
                  </div>
                  <div className="flex justify-between items-center mt-2 w-[18rem]">
                    <h2 className="text-sm">Profession</h2>
                    <h2
                      className="text-sm 
                        border-2 border-primary text-primary
                        border-dashed 
                        rounded-md px-6 py-2
                      "
                    >
                      {patient.profession}
                    </h2>
                  </div>
                </div>
                <div className="">
                  {/* <div className="flex justify-between  w-[18rem]"> */}
                  <h2 className="text-lg text-left font-semibold ">
                    Informations du carnet
                  </h2>
                  {/* </div> */}

                  <div className="flex justify-between items-center mt-2 w-[18rem]">
                    <h2 className="text-sm">Date de l'inscription</h2>
                    <h2
                      className="text-sm 
                        border-2 border-primary text-primary
                        border-dashed 
                        rounded-md px-6 py-2
                      "
                    >
                      12/05/1996
                    </h2>
                  </div>
                  <h2 className="text-sm my-2">Le rendez-vous prochain</h2>
                  <h2
                    className="text-sm 
                        border-2 border-primary text-primary
                        border-dashed 
                        rounded-md px-6 py-2
                      "
                  >
                    26/03/2022{" "}
                  </h2>

                  <h2 className="text-sm my-2">Nombre de rendez-vous </h2>
                  <h2
                    className="text-sm 
                        border-2 border-primary text-primary
                        border-dashed 
                        rounded-md px-6 py-2
                      "
                  >
                    <span className="bg-primary p-2 mr-2 rounded-md text-white">
                      12
                    </span>{" "}
                    /
                    <span className="bg-primary p-2 ml-2 rounded-md text-white">
                      20
                    </span>
                  </h2>
                </div>
              </div>
              <h2 className="text-xl text-left mt-2 font-semibold ">
                Antécédent médical
              </h2>
              <div className="bg-slate-100 w-full mt-2 h-48"></div>{" "}
            </div>
          ) : null}
        </div>
       {!showInfo? <div className="text-left mt-2 h-96 ">
          <h2 className="text-xl  font-semibold ">Liste de rendez-vous</h2>
          <input
            type="search"
            placeholder="Rechercher Rdv"
            className="input w-full border-2 border-solid border-primary max-w-xs"
          />
          <button className="btn btn-primary ml-2" onClick={() => setAddRdv(!addRdv)} >{!addRdv ? "Nouveau Rdv" : "Voir Rdv"}</button>
          {/* list rdv ISCompo */}
          {addRdv ? <NewRdv closeUpNRdv={setAddRdv}/> :
            patient.rdvs ? patient.rdvs.map((rdv, index) => <Rdv key={index} rdv={rdv}  />) : null


          }
        </div>: null}
      </div>
    </div>
  );
}

export default Details;
