import { createSlice } from "@reduxjs/toolkit";


export const UserActivo=createSlice(
    {
        name:"UserActivo",
        initialState:"Sin_Usuario",
        reducers:{
        reset:(set,accion)=>accion.payload
        }
    }
)


export const {reset}=UserActivo.actions
export default UserActivo.reducer