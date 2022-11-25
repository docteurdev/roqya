import { createSlice } from "@reduxjs/toolkit";

const messageSlice= createSlice({
    name:'createSlice',
    initialState:{
        message:'',
        status:'',
        showMsg: false
    },
    reducers:{
        getMessage(state){
            return state;
        },
        setMessage(state, {payload}){
            state.message= payload.message
            state.status= payload.status
        },
        alterShowMsg(state, {payload}){
            
            console.log("payload---------------------------------");
            console.log(payload);
          state.showMsg= payload
        }
    }
})

export default messageSlice;

export const {getMessage, setMessage, alterShowMsg}= messageSlice.actions;