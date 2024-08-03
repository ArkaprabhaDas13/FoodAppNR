import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({     // parameters

    name:'cart',                    // Name

    initialState:{                  // Initial State
        items : ["burger", "pizza", "cheese"]
    },

    reducers: {                     // We add ACTIONS inside a REDUCER which means the actions that the cart will do like : (addItem, removeItem, showCart)

        addItem: (state,action)=>{                          // ACTION 1
            state.items.push(action.payload)
        },
        removeItem: (state,action)=>{                       // ACTION 2
            state.items.pop()
        },
        clearCart: (state, action)=>{                       // ACTION 3
            state.items.length = 0;

            // state.items = []             This will not work
        }
    }
})

console.log(cartSlice)

// Here we are making the configuration inside the createSlice() function for cartSlice

// We will EXPORT 2 things : ACTIONS and REDUCERS

export const {addItem, removeItem, clearCart}  = cartSlice.actions
export default cartSlice.reducer;
// We are exporting the 'reducer' to the appStore.js file so that it can be used in the store as 'CartReducer'
 

/*
    After the createSlice() executes, cartSlice contains an Object which has actions and reducers as the object variables

    cartSlice = {
        actions: {addItem, removeItem, clearCart},
        reducer
    }
*/