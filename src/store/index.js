import { configureStore } from "@reduxjs/toolkit";
import UserActivo from "./Slice/UserActivo"
import ModuloSlice from "./Slice/ModuloSlice";
import ComentarioDBSlice from "./Slice/ComentarioDBSlice";
import AsistentesSlice from "./Slice/AsistentesSlice";
import SesionesSlice from "./Slice/SesionesSlice";
import CargandoSlice from "./Slice/CargandoSlice";

export default configureStore(
    {
        reducer:{
            UserActivo,
            ModuloSlice,
            ComentarioDBSlice,
            AsistentesSlice,
            SesionesSlice,
            CargandoSlice
             },
            
           
    }
)