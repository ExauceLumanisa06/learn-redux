import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    //initial state
    value: "exau",
    list : []
}
//user tranche 
const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUser:(state,action)=>{
           state.value = action.payload
        },
        reenit : (state,action)=>{
            state.value = "nom renitialise"
         },
         pushList : (state,action)=>{
           state.list = state.list.push(action.payload)
         }
    }
})

export const  {setUser,reenit,pushList} = userSlice.actions;

export default userSlice.reducer;