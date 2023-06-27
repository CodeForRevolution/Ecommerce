import { configureStore } from "@reduxjs/toolkit";
import * as redux from 'redux'
import { cartReducer } from "./Reducer/cartReducer";
import { productReducer } from "./Reducer/productReducer";
import { EditReducder } from "./Reducer/EditReducer";

 export const store=configureStore({
reducer:{
   cartReducer,
   productReducer,
   EditReducder
}
})

