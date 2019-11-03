import React from 'react';

class HelloReact extends React.Component{
    constructor(props){
      super(props)
      console.log(this.props)
    }
    render(){
       // console.log(this.props)
        return(<h2>Hello {this.props.name}</h2>)
    }
}

HelloReact.defaultProps = {
    name:'React'
}

export default HelloReact;

