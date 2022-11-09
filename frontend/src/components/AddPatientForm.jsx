import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextArea } from ".";
import { getPatients } from "../redux/patients";
import Input from "./input/Input";
import {Loading} from "./index"

function AddPatientForm({ closePop }) {

  const [nom, setNom] = useState("");
  const [prenom, setpreNom] = useState("");
  const [naissance, setnaissance] = useState("");
  const [contact, setcontact] = useState("");
  const [profession, setprofession] = useState("");
  const [religion, setreligion] = useState("");
  const [sexe, setsexe] = useState("");
  const [ant_medical, setant_medical] = useState("");
  const [s_matrimoniale, sets_matrimoniale] = useState("");

  const [load, setLoad] = useState(false)
 
  const dispatch= useDispatch()

  const newPatient = (e) => {
    
    e.preventDefault();
    setLoad(true)
    const data = {
        centreId: 1,
        patient: {
        nom: nom,
        prenom: prenom,
        date_naissance: naissance,
        sexe: sexe,
        profession: profession,
        contact: contact,
        religion: religion,
        s_matrimoniale: s_matrimoniale,
        ante_medicaux: "rien"
      }
    }
    axios.post("http://localhost:3001/api/roqya_ci/carnet_create", data)
         .then(res => {
          if(res.data){
            dispatch(getPatients());
            setLoad(false)
            document.getElementById('my-modal').click();
          }
         } )
         .catch(error => console.log(error) )
  
  }

    return (
      <>
      <div>
       {load? <Loading/>: null}
        <form onSubmit={newPatient} >
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">

                <div className="col-span-6 sm:col-span-3">
                  <Input
                    value={nom}
                    setValue={setNom}
                    label="Nom"
                    type="text" />
                </div>
                {/* <Input/> */}

                <div className="col-span-6 sm:col-span-3">
                  <Input
                    value={prenom}
                    setValue={setpreNom}
                    label="Prenom"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    value={naissance}
                    setValue={setnaissance}
                    label="Date de naissance"
                    type="date" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className="flex">
                    <label htmlFor="">sexe:</label>
                    <div className="flex  gap-4 ml-6">
                      <label htmlFor="">Masculin</label>

                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary"
                        onChange={() => setsexe("Masculin")}
                      />
                      <label htmlFor="">Féminin</label>

                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-secondary"
                        onChange={() => setsexe("Féminin")}

                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    value={profession}
                    setValue={setprofession}
                    label="Profession"
                    type="text" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Input
                    value={contact}
                    setValue={setcontact}
                    label="Contact"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    value={religion}
                    setValue={setreligion}
                    label="Réligion"
                    type="text"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className="flex">
                    <label htmlFor="">Situation matrimoniale:</label>
                    <div className="flex  gap-2 ml-6">
                      <label htmlFor="">C</label>

                      <input
                        type="radio"
                        name="radio-smatri"
                        onChange={() => sets_matrimoniale("Célibataire")}
                        className="radio radio-secondary-focus"
                      // checked
                      />
                      <label htmlFor="">M</label>

                      <input
                        type="radio"
                        name="radio-smatri"
                        onChange={(e) => sets_matrimoniale(sexe ==="Féminin"? "Mariée": "Marié")}
                        className="radio radio-accent"
                      />
                      <label htmlFor="">D</label>

                      <input
                        type="radio"
                        name="radio-smatri"
                        onChange={() => sets_matrimoniale(sexe ==="Féminin"? "Divorcée": "Divorcé")}
                        className="radio radio-secondary"
                      />
                      <label htmlFor="">V</label>

                      <input
                        type="radio"
                        name="radio-smatri"
                        onChange={() => sets_matrimoniale(sexe ==="Féminin"? "Veuve": "Veuf")}
                        className="radio checked:bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-ee"
                >
                  Antécédant médical
                </label>
                <div className="mt-1">
                  <TextArea
                    value={ant_medical}
                    setValue={setant_medical}
                    placeholder="Antécédant médical"
                  />
                </div>

              </div>
              {/* 
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Change
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div> */}
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <label
                htmlFor="my-modal"
                type="submit"
                className="inline-flex justify-center 
               rounded-md border cursor-pointer
               border-2 
               bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm 
               hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Annuler

              </label>
              <label
              onClick={newPatient}
                type="submit"
                htmlFor="my-modal"
                className="inline-flex ml-4 justify-center cursor-pointer rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enregistrer
              </label>
            </div>
          </div>
        </form>
      </div>
      </>
    );
  }

  export default AddPatientForm;
