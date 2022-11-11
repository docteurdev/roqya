import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import logoImg from "../../assets/roqya.jpg";
import bgImg from "../../assets/caranimg.jpg";


import * as yup  from 'yup';
import {Formik} from "formik";
import { Loading, RegisterInput } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [registier, setRegister] = useState(false);

  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [nomCentre, setNomCentre] = useState("");
  const [situationGeo, setSituationGeo] = useState("");
  const [siteweb, setSiteWeb] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading]= useState(false);

  const navigate= useNavigate()

  
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


 
  const register = (e ) =>{
  e.preventDefault();
  setLoading(true)

  let data = {
       userName: userName,
       password: password,
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
    if(resp.data){
      navigate('/')
      setLoading(false)
      console.log(resp.data);
    }
  })
  .catch(error =>{
    if(error){
      setLoading(false)
      console.log(error);

    }
  })
    
  }



  return (
    <div style={{height: "100vh",}} className="flex justify-center p-6 items-center bg-gray-200">
      
     {loading? <Loading/>: null}
    <div style={{width: "90%", height:"90vh"}} className="flex bg-white min-h-ful rounded-lg shadow-lg gap-2 justify-center p-6 items-center  sm:px-6 lg:px-8">
      <div className="w-full  max-w-md h-46">        
        <form
        onSubmit={register}
        className="">
          {/* <input type="hidden" name="remember" defaultValue="true" /> */}
          <div className="-space-y-px rounded-md shadow-sm">
           

              <>
              <RegisterInput
               type="text"
               value={nomCentre}
               placeholder="Le nom du centre" 
              
               setValue={setNomCentre}                    
              />
              <RegisterInput
               type="text"
               value={userName}
               placeholder="Le nom d'utilisateur" 
              
               setValue={setuserName}                    
              />
              <RegisterInput
              type="text"
              value={password}
              placeholder="Choisir un mot de passe" 
             
              setValue={setPassword}                    
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

           




          </div>

          <div className="text-right">

            <div className="text-sm">
              <a 
               onClick={() => navigate("/") }
              className="font-medium text-indigo-600 my-6 hover:text-indigo-500 cursor-pointer">
               Se connecter à votre compte
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
      <div 
      style={{backgroundImage: `url(${bgImg})`,
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover'}}
       className="flex justify-between items-center flex-col w-[450px] h-[455px] rounded-md px-4 bg-gray-200"
       >
        <h2 style={{fontWeight: '800', textShadow: '2px 2px #ff000'}} className='text-3xl text-white'>Créer votre Centre</h2>
        <div className="w-full h-48 bg-gray-500 mb-4 p-3  rounded-lg backdrop-blur-sm">
         <h4 style={{fontWeight: '600', fontSize: '1.2rem',}} className='text-black text-right ' >وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ وَلَا يَزِيدُ ٱلظَّٰلِمِينَ إِلَّا خَسَارًا</h4>
            <h4 style={{fontWeight: '600'}} className='text-white '>17 : 82 - Nous faisons descendre du Coran, ce qui est une guérison et une miséricorde pour les croyants cependant. Cependant, cela ne fait qu'accroître la perdition des injustes.</h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
