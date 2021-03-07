import {createStore} from "redux";
import {createAction, createReducer, configureStore} from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
console.log(addToDo,deleteToDo);

const reducer = createReducer([],{
    [addToDo]:(state, action) =>{
        // mutate state 
        state.push({text:action.payload, id:Date.now()});
    },
        // new state 
    [deleteToDo]:(state, action) =>state.filter(toDo=>toDo.id !== action.payload)
});

// const store = createStore(reducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({reducer});
export default store;
export const actionCreators ={
    addToDo,
    deleteToDo
};