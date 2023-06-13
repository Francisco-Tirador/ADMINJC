import { createSlice } from "@reduxjs/toolkit";

export const AsistentesSlice=createSlice(
    {
        name:"AsistentesSlice",
        initialState:"",
        reducers:{
            resetAsistentes:(set,accion)=>accion.payload
        }
    }
)

export const {resetAsistentes}=AsistentesSlice.actions
export default AsistentesSlice.reducer

