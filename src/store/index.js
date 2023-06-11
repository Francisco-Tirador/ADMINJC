import { configureStore } from "@reduxjs/toolkit";
import UserActivo from "./Slice/UserActivo"
import ModuloSlice from "./Slice/ModuloSlice";
import ComentarioDBSlice from "./Slice/ComentarioDBSlice";

export default configureStore(
    {
        reducer:{
            UserActivo,
            ModuloSlice,
            ComentarioDBSlice
             },
            
           
    }
)