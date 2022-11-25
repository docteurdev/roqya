import { createSlice } from "@reduxjs/toolkit";

 const userLogSys= createSlice({
    name: 'userToken',
    initialState:{
        userToken: null
    },
    reducers:{
        login: (state ) =>{
            let newToken= "userIslogged";
            state.userToken= newToken
            
        },
        logout:(state) =>{
            let newToken= null
            state.userToken= newToken

        }
    }
}) 

export const {login, logout}= userLogSys.actions;
export default userLogSys;