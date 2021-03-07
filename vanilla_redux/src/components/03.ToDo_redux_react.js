import React from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({text,id,onBtnClick}) {
    return <li>
        <Link to={`/${id}`}>{text}</Link>
         <button onClick={onBtnClick}>DEL</button>
    </li>;
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(dispatch,ownProps);
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}
export default connect(null,mapDispatchToProps)(ToDo);