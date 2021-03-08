import React from "react";

// function Detail({location}){
//     console.log(location);
//     return <span>Detail page</span>;
// }

class Detail extends React.Component {
    componentDidMount(){
        const {location,history} = this.props;
        console.log(this.props);
        
        if ( location.state === undefined ) {
            history.push("/");
        }
    }

    render(){
        
   // const { data: { data: { movies } } } 

        const { location ,match:{params}} = this.props;
        const param = {};
        if ( location.state ) {
            return <>
            <div>id : {params.id}</div>
            <span>{location.state.title}</span>
            </>;
        } else {
            return null;
        }
    }
}

export default Detail;