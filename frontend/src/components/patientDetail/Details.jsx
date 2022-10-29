import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const RdvContentItem = () =>{
    return(
        <div className="">
            <button className=" bg-primary text-white rounded-xl font-semibold px-4 h-[25px] " >manger</button>
        </div>
    )
}

const Rdv = () => {
  const [rdvContent, setrdvContent] = useState(false);

  return (
    <div className="">
     <div style={{minHeight: rdvContent? 200: 50, }} className="w-full p-2 transition-height rounded-lg mt-2 border-2 border-solid">
      <div className="rdv-header  flex justify-between items-center ">
        <h2 className="text-lg text-lef font-normal flex items-center ">
          <span className="font-semibold mr-2">Date:</span> <span>12/35/2021</span>
        </h2>
        <h2 className="text-lg text-lef font-normal flex items-center ">
          <span className="font-semibold mr-2">Sécrétaire:</span> <span>Fatim</span>
        </h2>
        <h2 className="text-lg text-lef font-normal">
        <span className="font-semibold mr-2">Sécrétaire:</span> <span>Fatim</span>
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
      {rdvContent? <div className="rdv-body mt-2">
        {/* divider */}
        <div className="w-full h-1 bg-slate-500 mb-2"/>
         <div className=" flex gap-2">
            <div className=" w-[40%]">
             <h2 className="font-medium">Sorcelleries à traiter</h2>
            </div>
            <div className="w-screen flex flex-wrap gap-2">
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
                
            </div>
         </div>

         <div className="flex gap-2 mt-2">
            <div className=" w-[40%]">
             <h2 className="font-medium">Ventouses</h2>
            </div>
            <div className="w-screen flex flex-wrap gap-2">
           
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
                
            </div>
         </div>
            
         <div className="flex gap-2 mt-2">
            <div className=" w-[40%]">
             <h2 className="font-medium">Rédemdes</h2>
            </div>
            <div className="w-screen flex flex-wrap gap-2">
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            <RdvContentItem/>
            
            </div>
         </div>
         


      </div>: null}

     </div>
    </div>
  );
};



function Details() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <div className="detail">
        <div className="hearder">
          <h2 className="text-xl text-left mb-4 font-semibold flex items-center ">
            Afficher les informations du patient
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
          </h2>

          {showInfo ? (
            <>
              <div className="detail-header flex justify-between gap-2">
                <div className="photo-box w-40 h-40 bg-primary rounded-md"></div>
                <div className="">
                  <div className="flex justify-between  w-[18rem]">
                    <h2 className="text-lg font-semibold ">Adje</h2>
                    <h2 className="text-lg font-semibold ">N'guessan oumar</h2>
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
                      12/05/1996
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
                      Marié{" "}
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
                      Muslim{" "}
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
                      Développeur d'applis{" "}
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
            </>
          ) : null}
        </div>
        <div className="text-left mt-2 h-96 ">
          <h2 className="text-xl  font-semibold ">Liste de rendez-vous</h2>
          <input
            type="search"
            placeholder="Type here"
            className="input w-full border-2 border-solid border-primary max-w-xs"
          />
          {/* list rdv */}
          <div className="">
            <Rdv />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
