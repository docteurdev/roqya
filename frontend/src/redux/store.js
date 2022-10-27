import patientsSlice from './patients';
const {createSlice, configureStore} = require('@reduxjs/toolkit');


export const store = configureStore({
    reducer:{
        patients: patientsSlice.reducer
    }
})