import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCenters=  createAsyncThunk("centreSlice/getCenters", async () =>{

    const centres= await axios.get('http://192.168.43.35:3001/api/roqya_ci/getAll_center')
                .then(res => {
                 return res.data.data    
                })
                .catch(error => console.log(error))
        return centres
})
const centreSlice= createSlice({
    name: 'centreSlice',
    initialState:{
        selcetedCentre:{},
        centres: []
    },
    reducers:{
      selectCentre(state, {payload}){
        state.selcetedCentre= payload
      }
    },
    extraReducers:{
      [getCenters.pending]: () =>{
        console.log("getCenters is pending");
      },
      [getCenters.fulfilled]: (state, {payload}) =>{
          state.centres= payload;
      },
      [getCenters.rejected]: () =>{
        console.log("getCenters is rejected");
      }
    }
})

export const {selectCentre}= centreSlice.actions;


export default centreSlice;