import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product:{

    },
    toggle:false,

}
const EditSlice=createSlice({
    name:'edit',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.product={...action.payload};
            console.log('===you add in edit Reducer called===',state.product);
        },
        eidtToogle:(state,action)=>{
            state.toggle=action.payload;
            console.log('your toggel in edit',state.toggle)
        }

    }
})

export const EditReducder=EditSlice.reducer;
export const EditAction=EditSlice.actions;
export const EdlitSelector=(state)=>state.EditReducder.product;
export const EdlitToggleSelectort=(state)=>state.EditReducder.toggle;