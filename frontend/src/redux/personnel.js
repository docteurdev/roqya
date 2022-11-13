import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const centreId = JSON.parse(localStorage.getItem('centreInfo'))

export const getPersonals = createAsyncThunk("personelSlice/getPersonals", async(id) =>{
 const res = await axios.get(`http://localhost:3001/api/roqya_ci/getAll_employe/${id}`)
  .then((res) =>{
    if(res.data){

      return res.data.data
    }
  })
  .catch(error => console.log(error))

  return res
})

const personelSlice = createSlice({
    name: "personelSlice",
    initialState:{
        
    },

    reducers:{

    },
    extraReducers:{
      [getPersonals.pending]: () =>{
        console.log("pending");
      },
      
      [getPersonals.fulfilled]: (state, {payload}) =>{
        
           return state = payload ;
      },

      [getPersonals.rejected]: () =>{
        console.log("rejected");
      }
    }
})

export default personelSlice;