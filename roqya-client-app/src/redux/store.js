import { configureStore } from "@reduxjs/toolkit";
import centreSlice from "./centres";
import userLogSys from "./connexions";
import consultationSlice from "./consultation";

export const store= configureStore({
    reducer: {
        consultations: consultationSlice.reducer,
        centres: centreSlice.reducer,
        user: userLogSys.reducer
    } 
})