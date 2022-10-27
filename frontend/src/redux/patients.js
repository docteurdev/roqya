const {createSlice, configureStore} = require('@reduxjs/toolkit');

const patientsSlice = createSlice({
    name: "patients",
    initialState:{
        pats:[
        {id:1, Nom:"eba", Prenom: "modibo", Contact: "01245333"},
        {id:2, Nom:"molk", Prenom: "charles", Contact: "01245333"},
        {id:3, Nom:"drago", Prenom: "fola", Contact: "01245333"},
        {id:4, Nom:"kaba", Prenom: "too", Contact: "01245333"},
        {id:5, Nom:"prao", Prenom: "dah", Contact: "01245333"},
        ],
        patient:{}
},
    reducers:{
        getPatient:(state, action) =>{
           state.patient= action.payload;
             
        }
    }
})
export const {getPatient} = patientsSlice.actions;
export default patientsSlice;