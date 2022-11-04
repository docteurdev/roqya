import axios from 'axios';
import React,{ useState,memo } from 'react'
import RegisterInput from './input/RegisterInput'

function AddPersonelForm() {

    const [nom, setNom]= useState("");
    const [prenom, setpreNom]= useState("");
    const [contact, setcontact]= useState("");

  const newpersonel=() =>{
    let data={
        idCentre: 1,
        idTypeEmploye: 1,
        employe:{
            typeEmploye:1,
            nom:  nom  ,
            prenom: prenom,
            contact: contact
        }
    }

    axios.post("http://localhost:3001/api/roqya_ci/create_employe", data)
         .then(res => {
            document.getElementById('new-personel').click();
            console.log(res.data) 
        })
         .catch(res => console.log(res) );
  }

  return (
    <div>
      <form>
        <RegisterInput
         value={nom}
         setValue={setNom}
         placeholder="Nom"
        />
        <RegisterInput
         value={prenom}
         setValue={setpreNom}
         placeholder="Prenom"
        />
         <RegisterInput
         value={contact}
         setValue={setcontact}
         placeholder="Contact"
        />

<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <label
                htmlFor="new-personel"
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
              onClick={newpersonel}
                type="submit"
                className="inline-flex ml-4 justify-center cursor-pointer rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enregistrer
              </label>
            </div>

      </form>
    </div>
  )
}

export default memo(AddPersonelForm)
