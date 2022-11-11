import axios from 'axios';

const {createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const centreId = JSON.parse(localStorage.getItem('centreInfo'))

export const getPatients = createAsyncThunk("patients/getPatients", async() =>{
  const patients = await axios.get(`http://localhost:3001/api/roqya_ci/getAll_patients/${centreId.id}`)
                    .then(res =>{
                        if(res.data){

                            return res.data.data
                        }
                    })
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