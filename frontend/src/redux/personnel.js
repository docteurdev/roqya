import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPersonals = createAsyncThunk("personelSlice/getPersonals", async() =>{
 const res =  axios.get("http://localhost:3001/api/roqya_ci/getAll_employe")
  .then((res) =>{return res.data.data})
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