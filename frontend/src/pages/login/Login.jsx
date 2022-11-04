import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import logoImg from "../../assets/roqya.jpg"
import * as yup  from 'yup';
import {Formik} from "formik";
import { RegisterInput } from '../../components';
import axios from 'axios';

function Login() {

  const [registier, setRegister] = useState(false);

  const [password, setPassword] = useState("");
  const [nomCentre, setNomCentre] = useState("");
  const [situationGeo, setSituationGeo] = useState("");
  const [siteweb, setSiteWeb] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  
  const schema = yup.object().shape({
    nomCentre: yup.string().required("le nom de centre est obligatoire"),
    situationGeo: yup.string().required("la situation Géographique est obligatoire"),
    contact: yup.string().required("le contact situationGeo"),
    siteweb: yup.string().url(),
    email: yup.string().email(),
    facebook: yup.string().url(),
    youtube: yup.string().url(),
    password: yup.string().required("le mot de passe est obligatoire")


  })


 const ee = (e)=>{
  e.preventDefault()
 }
  const register = (e ) =>{
  e.preventDefault();
  let data = {
    //  password,
       nom: nomCentre,
      contact: contact,
      localite: situationGeo,
      siteWeb: siteweb,
     email: email,
     facebook: facebook,
     youtube: youtube,
    }
  axios.post('http://localhost:3001/api/roqya_ci/create_center', data)
  .then(resp =>{
    console.log(resp.data);
  })
  .catch(error =>{
    console.log(error);
  })
    
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
         {!registier? <img
            className="mx-auto h-40 w-auto"
            src={logoImg}
            alt="Your Company"
          />: null }
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {registier ? "Créer un centre" : "Se connecter"}
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p> */}
        </div>        
        
        <form
        onSubmit={register}
        className="mt-8 space-y-6">
          {/* <input type="hidden" name="remember" defaultValue="true" /> */}
          <div className="-space-y-px rounded-md shadow-sm">
            {!registier ?
              <>

              <RegisterInput
               type="text"
               placeholder="Numéro du centre"
               value={contact} 
              
               setValue={setContact}           
              />

              <RegisterInput
               type="text"
               value={password}
               placeholder="Mot de passe" 
               
               setValue={setPassword}                    
              />
              </> :

              <>
              <RegisterInput
               type="text"
               value={nomCentre}
               placeholder="Le nom du centre" 
              
               setValue={setNomCentre}                    
              />

              <RegisterInput
               type="text"
               placeholder="Situation Géographique" 
               value={situationGeo}
               setValue={setSituationGeo}                    
              />

              <RegisterInput
               type="text"
               placeholder="Contact" 
               value={contact}
               setValue={setContact}                    
              />

            <RegisterInput
               type="text"
               placeholder="Site Web"
               value={siteweb}
               
               setValue={ setSiteWeb}                     
              />


              <RegisterInput
               type="text"
               value={email}
               placeholder="Address  Email" 
               
               setValue={ setEmail}                    
              />

              <RegisterInput
               type="text"
               value={facebook}
               placeholder="Facebook"
              
               setValue={ setFacebook}                     
              />

              <RegisterInput
               type="text"
               value={youtube}
               placeholder="Youtube"   
              
               setValue={ setYoutube}                   
              />

                   
              

              </>

            }




          </div>

          <div className="text-right">

            <div className="text-sm">
              <a 
               onClick={() => setRegister(!registier) }
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
               {registier?  "Se connecter?": "Créer un nouveau centre?"}
              </a>
            </div>
          </div>

          <div>
            <button
             type='submit'
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              {registier? "Créer le centre": "Connexion"}
            </button>
          </div>
        </form>
          

      </div>
    </div>
  )
}

export default Login
