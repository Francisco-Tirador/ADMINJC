import { createSlice } from "@reduxjs/toolkit";

export const SesionesSlice=createSlice(
    {
        name:"SesionesSlice",
        initialState:[],
        reducers:{
            resetSesiones:(set,accion)=>accion.payload
        }
    }
)

export const {resetSesiones}=SesionesSlice.actions
export default SesionesSlice.reducer

