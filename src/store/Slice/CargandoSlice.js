import { createSlice } from "@reduxjs/toolkit";

export const CargandoSlice=createSlice(
    {
        name:"CargandoSlice",
        initialState:" ",
        reducers:{
            resetCargando:(set,accion)=>accion.payload
        }
    }
)

export const {resetCargando}=CargandoSlice.actions
export default CargandoSlice.reducer

