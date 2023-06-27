import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

var initialState={
    products:[
    
    ],
   
}

const productSlice=createSlice({
    name:'product',
    initialState:initialState,
    reducers:{
      setProduct:(state,action)=>{
state.products=[...action.payload]
console.log('after setting all product in redux',state.products)
      },
      add:(state,action)=>{
        state.products=[action.payload,...state.products];
        console.log('===you add of product Reducer called=== ',action.payload);
        toast.success('Product Added');

      },
        delete:(state,action)=>{
            const filter=state.products.filter((element)=>{
                if(element.id!=action.payload){
                    return element;
                }
            })
            state.products=[...filter];
            toast.success('Product Deleted');
        },
        edit:(state,action)=>{
            console.log('your reducer edit action called',action.payload)
        state.products=   state.products.map((element)=>{
                if(element.id===action.payload.id){
                    toast.success('Produc Edited');
                    return {...element,...action.payload}
                    
                }
                return element;
            })
        }
    }
})

export const productReducer=productSlice.reducer;
export const productAction=productSlice.actions;
export const productSelector=(state)=>state.productReducer.products