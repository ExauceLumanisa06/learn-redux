import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// export const initialState = {
//     //initial state
//     user: null,
//     loading: false,
//     error: null
// }


// const reducer = (state = initialState, action) = {
//     //tous nos reduceurs
// }



const store = configureStore({
    reducer: {
        user : userReducer
    }
})

export default store