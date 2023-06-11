import { createSlice } from "@reduxjs/toolkit";


export const ComentariosBDSlice=createSlice(
    {
        name:"ComentariosBDSlice",
        initialState:"",
        reducers:{
            ComentariosBDSlice:(set,accion)=>accion.payload
        }
    }
)

export const {resetComentarioDB}=ComentariosBDSlice.actions
export default ComentariosBDSlice.reducer