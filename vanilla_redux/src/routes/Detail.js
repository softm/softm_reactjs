import React from "react";
import { connect } from "react-redux";
function Detail({toDo}){
    console.log(toDo);
    //return "test";
    return( <>
        <h1>{toDo?.text}</h1>
        id: {toDo?.id}
        </>
    );
}
function mapStateToProps(state,ownerProps) {
    const {match:{
        params:{id}
    }} = ownerProps;
    return {
        toDo:state.find((toDo)=>{
            return toDo.id===parseInt(id);
        })
    }
}

export default connect(mapStateToProps,null)(Detail);
