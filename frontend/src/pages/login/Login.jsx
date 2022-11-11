import React, { useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import logoImg from "../../assets/roqya.jpg"
import * as yup  from 'yup';
import {Formik} from "formik";
import { Loading, RegisterInput } from '../../components';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

function Login() {

  const [registier, setRegister] = useState(false);

  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [loading, setLoading] =useState(false)

  const navigate= useNavigate();

  const centerInfos = JSON.parse(localStorage.getItem('centreInfo'));


  useEffect(() => {
      if(centerInfos) return navigate('/board')
    
  
   
  }, [centerInfos])
  

   const navLink =(route) =>{
     navigate(route)
   }
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
    setLoading(true);
  e.preventDefault();
  let data = {
       userName: userName,
       password: password,
    }


  axios.post('http://localhost:3001/login/centre', data)
  .then(resp =>{
    if(resp.data){
      localStorage.setItem('centreInfo', JSON.stringify(resp.data.data))
      navLink('/board');
      setLoading(true);

      
    }
  })
  .catch(error =>{
    console.log(error);
  })
    
  }


  

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      {loading? <Loading/>: null}
        <div>
       <img
            className="mx-auto h-40 w-auto"
            src={logoImg}
            alt="logo"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Se connecter
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
              <>

              <RegisterInput
               type="text"
               placeholder="Numéro du centre"
               value={userName} 
              
               setValue={setuserName}           
              />

              <RegisterInput
               type="text"
               value={password}
               placeholder="Mot de passe" 
               
               setValue={setPassword}                    
              />
              </> 

              




          </div>

          <div className="text-right">

            <div className="text-sm">
              <p 
               onClick={() => navLink("/create-center") }
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
               {registier?  "Se connecter?": "Créer un nouveau centre?"}
              </p>
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
               Connexion
            </button>
          </div>
        </form>
          
        <Outlet/>
      </div>
    </div>
  )
}

export default Login
