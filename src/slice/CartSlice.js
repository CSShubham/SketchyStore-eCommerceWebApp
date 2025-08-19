import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload;
            const existingItem=state.items.find((i)=>i.id===item.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice+=item.price;
            }else{
                state.items.push({...item,quantity:1,totalPrice:item.price});
                
            }
            state.totalQuantity++;
            state.totalAmount+=item.price;
        },
        removeFromCart:(state,action)=>{
            const id=action.payload;
            const existingItem=state.items.find((i)=>i.id===id);
            if(existingItem){
                if(existingItem.quantity > 1){
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                    state.totalQuantity--;
                    state.totalAmount -= existingItem.price;
                }else{
                    state.totalQuantity--;
                    state.totalAmount -= existingItem.price;
                    state.items = state.items.filter((i)=>i.id!==id);
                }
            }
        
        },
        clearCart:(state)=>{
            state.items=[];
            state.totalQuantity=0;
            state.totalAmount=0;
        },
    }
})
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;