import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const toDos = createSlice({
    name:'toDosReducer',
    initialState:[],
    reducers:{
        add:(state, action) =>{
            // mutate state 
            state.push({text:action.payload, id:Date.now()});
        },
        remove:(state, action) =>state.filter(toDo=>toDo.id !== action.payload)
    }
});
console.log(toDos.actions);
export const { add, remove } = toDos.actions;

export default configureStore({reducer: toDos.reducer}); // return store == createStore is same