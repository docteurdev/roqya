import { createSlice } from "@reduxjs/toolkit";

 const connexionSlice = createSlice({
    name: 'connexionSlice',
    initialState:{
        centerConx: true,
        assitantConx: false
    },
    reducers:{
        setCenterConx(state, {payload}){
            state.centerConx = payload;
        },
        setAssitantConx(state, {payload}){
            state.assitantConx= payload;

        },
        disconnectCenter(state, {payload}){
            
            state.centerConx = payload;
        },
        disconnectAssitant(state, {payload}){
            
            state.assitantConx = payload;
        },

    }
})

export default connexionSlice;

export const  {disconnectAssitant, disconnectCenter, setAssitantConx, setCenterConx} = connexionSlice.actions

