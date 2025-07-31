import { createSlice } from "@reduxjs/toolkit";
const Wishlist=createSlice({
    name:'wishlist',
    initialState:{
        items:[],
    },
    reducers:{
        addToWishlist:(state,action)=>{
            const item=action.payload;
            const existingItem=state.items.find((i)=>i.id===item.id);
            if (!existingItem) state.items.push(action.payload);
        },
        removeFromWishlist:(state,action)=>{
            const id=action.payload;
                    state.items = state.items.filter((i)=>i.id!==id);
        },
    }
})
export const { addToWishlist, removeFromWishlist} = Wishlist.actions;
export default Wishlist.reducer;