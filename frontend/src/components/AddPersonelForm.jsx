import axios from 'axios';
import React, { useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonals } from '../redux/personnel';
import RegisterInput from './input/RegisterInput';
import {Loading} from "./index"


function AddPersonelForm() {
  
  const [typePersonel,setTypePersonel] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setpreNom] = useState("");
  const [contact, setcontact] = useState("");
  const [load, setLoad]= useState(false);

  const rakis = useSelector(state => state.personels);

  const dispatcha = useDispatch();

  const newpersonel = () => {
    setLoad(true)
    let data = {
      idCentre: 1,
      idTypeEmploye: typePersonel,
      employe: {
        typeEmploye: typePersonel,
        nom: nom,
        prenom: prenom,
        contact: contact
      }
    }

    axios.post("http://localhost:3001/api/roqya_ci/create_employe", data)
      .then(res => {

        if(res.data){
          dispatcha(getPersonals());
        setLoad(false)
          document.getElementById('new-personel').click();
          console.log(res.data)

        }
      })
      .catch(res =>{
        setLoad(false)
        console.log(res)

      } 
      );
  }

  return (
    <div>
      <>
      {load? <Loading/>: null}
      <form>
        <div className="col-span-6 sm:col-span-3">
          <h2 className='font-semibold' >Type de personel</h2>
          <select
            onChange={(e) => setTypePersonel(e.target.value)}
            className="select mt-1 select-accent w-full max-w-xs">
            <option disabled selected>Selectionner un raqki </option>
            <option value="raki">raki</option>
            <option value="sécrétaire">sécrétaire</option>
          </select>
        </div>

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
      </>
    </div>
  )
}

export default memo(AddPersonelForm)
