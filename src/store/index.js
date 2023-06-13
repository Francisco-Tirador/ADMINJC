import { configureStore } from "@reduxjs/toolkit";
import UserActivo from "./Slice/UserActivo"
import ModuloSlice from "./Slice/ModuloSlice";
import ComentarioDBSlice from "./Slice/ComentarioDBSlice";
import AsistentesSlice from "./Slice/AsistentesSlice";
import SesionesSlice from "./Slice/SesionesSlice";

export default configureStore(
    {
        reducer:{
            UserActivo,
            ModuloSlice,
            ComentarioDBSlice,
            AsistentesSlice,
            SesionesSlice
             },
            
           
    }
)