import { createSlice } from "@reduxjs/toolkit";


const consultationSlice= createSlice({
    name:"consultation",
    initialState:{
      consultationP:[]
    },
    reducers:{
        getAllConsul(state, {payload}){

           return  state
        },
        setConsultation(state, {payload}){
            // console.log("payload____________");
            // console.log(payload.rdvs);
         let newConsultations= payload 
         state.consultationP= newConsultations
        }
    }
})


export  const {getAllConsul, setConsultation}= consultationSlice.actions

export default consultationSlice;