import { configureStore } from "@reduxjs/toolkit";
// Here we are importing the configureStore from "@reduxjs/toolkit" because Redux is not a part of React
// However, Provider on the other hand is a part of React which connects React to the Redux. So its imported from "react-redux"
import cartReducer from './cartSlice'


const appStore = configureStore({

    // This is the REDUCERS for the entire App Store
    
    reducer:{
        cart: cartReducer
    }

})

export default appStore;


// 1. We are first making a Store here
// 2. Then we are exporting this store as default
// 3. This store is then used in the App.js file to connect the React app to, using Provider
// 4. Now create SLICES in the Redux store
