import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    //initial state
    value: "exau",
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
    }
})

export const  {setUser,reenit} = userSlice.actions;

export default userSlice.reducer;