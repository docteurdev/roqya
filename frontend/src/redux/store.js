import connexionSlice from './connexion';
import messageSlice from './message';
import patientsSlice from './patients';
import personelSlice from './personnel';
import { rdvSlice } from './rdv';
const { configureStore} = require('@reduxjs/toolkit');


export const store = configureStore({
    reducer:{
        patients: patientsSlice.reducer,
        personels: personelSlice.reducer,
        rendezVous: rdvSlice.reducer,
        login: connexionSlice.reducer,
        message: messageSlice.reducer,
    }
})