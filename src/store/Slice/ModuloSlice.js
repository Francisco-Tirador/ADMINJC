import { createSlice } from "@reduxjs/toolkit";


export const Modulo=createSlice(
    {
        name:"ModuloSlice",
        initialState:[],
        reducers:{
        resetModulo:(set,accion)=>accion.payload
        }
    }
)


export const {resetModulo}=Modulo.actions
export default Modulo.reducer