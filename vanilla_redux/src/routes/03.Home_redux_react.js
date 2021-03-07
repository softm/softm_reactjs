import React, {useState} from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({toDos,addToDo}) {
    console.log(toDos,addToDo);
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}/>
            <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
            </ul>
        </>
    );
};

function mapStateToProps(state, onwerProps){
    console.log(state,onwerProps);
    return {toDos: state};
}

function mapDispatchToProps(dispatch, ownerProps){
    console.log(dispatch,ownerProps);
    return {
        addToDo: (text) => {
            dispatch(actionCreators.addToDo(text))
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);