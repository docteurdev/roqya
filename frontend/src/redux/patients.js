import axios from 'axios';

const {createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getPatients = createAsyncThunk("patients/getPatients", async() =>{
  const patients =  axios.get("http://localhost:3001/api/roqya_ci/getAll_patients")
                    .then(res =>{return res.data.data})
                    .catch(error => console.log(error) )
    return patients;
}) 

const patientsSlice = createSlice({
    name: "patients",
    initialState:{
        pats:[],
        patient:{}
},
    reducers:{
        getPatient:(state, action) =>{
           state.patient= action.payload;
             
        }
    },
    extraReducers:{
        [getPatients.pending]:() =>{
            console.log("pending");
        },

        [getPatients.fulfilled]: (state, {payload}) =>{
              state.pats= payload;
        },

        [getPatients.rejected]: () =>{
            console.log("call is rejected");
        }
    }
})
export const {getPatient} = patientsSlice.actions;
export default patientsSlice;