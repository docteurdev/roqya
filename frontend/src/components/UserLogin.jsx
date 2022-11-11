import React from 'react'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import RegisterInput from './input/RegisterInput';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { disconnectAssitant, setAssitantConx } from '../redux/connexion';
import logo from '../assets/roqya.jpg'
import Loading from './common/Loading';


function UserLogin() {

    const [username, setUsername]= useState()
    const [password, setPassword]= useState();
     const [loading, setLoading] = useState(false);

    const dispatch= useDispatch();

    const userLogin= (e) =>{
        setLoading(true)
        e.preventDefault()
        let data ={
            userName: username,
            password: password
        }

        axios.post("http://localhost:3001/login/personels",data)
             .then(res =>{
                if(res.data){
                    // dispatch(setAssitantConx(res.data.data));
                    localStorage.setItem("userInfos", JSON.stringify(res.data.data));
                    dispatch(disconnectAssitant(true))
                    setLoading(false)

                    // console.log(res.data.data);
                }
             })
             .catch(error =>{
                console.log(error);
             })
    }

  return (
    <div className='flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-white-200 z-10 backdrop-blur-lg ' >
      {loading? <Loading/>: null}
      <form onSubmit={userLogin}  className='flex flex-col justify-center p-16 w-4/12 h-96 bg-[#bdc3c7] shadow-gray-50 rounded-lg ' >
        
        <img src={logo} alt="roqya-logo" className='h-10 w-10 rounded-full mb-1' />
      <div className="text-center">
        <LockClosedIcon className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
        <p 
        className="font-md text-indigo-600 hover:text-indigo-500 mb-5 text-left">
            Le Centre est connecté, connectez-vous en tant qu'utilisateur du centre afin d'accéder au tableau de board 
        </p>
       </div>

        <RegisterInput
        value={username}
        setValue={setUsername}
        placeholder="nom d'utilisateur"
        />
        <RegisterInput
        value={password}
        setValue={setPassword}
        placeholder="mot de passe"
        />
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
    </div>
  )
}

export default UserLogin
