import { createSlice } from "@reduxjs/toolkit";

export const rdvSlice = createSlice({
    name: "rdvSlice",
    initialState:{
        symptomes:[],
        ventouses:[],
        remede:[]
    },

    reducers:{
        emptyedArr(state){
            let newSymp= [];
            let newVent= [];
            let newRem= [];

            state.symptomes = newSymp;
            state.ventouses = newVent;
            state.remede = newRem;
        },
        manageSymp(state, {payload}){
           let item = state.symptomes.includes(payload);
            if(item === true){
             let newState = state.symptomes.filter(symp => symp !==payload);
             state.symptomes = newState;
             console.log(state.symptomes);
            }else{

                state.symptomes.push(payload)
            }

        },
        manageVent(state, {payload}){
            let item = state.ventouses.includes(payload);
            if(item === true){
                let newState = state.ventouses.filter(symp => symp !==payload);
                state.ventouses = newState;
                console.log(state.ventouses);
               }else{

                   state.ventouses.push(payload)
               }

        },
        manageRem(state, {payload}){
            let item = state.remede.includes(payload);
            if(item === true){
                let newState = state.remede.filter(symp => symp !==payload);
                state.remede = newState;
                console.log(state.remede);
               }else{
                   state.remede.push(payload)

               }


        }
    }
})

export const {manageRem, manageSymp, manageVent, emptyedArr} = rdvSlice.actions;