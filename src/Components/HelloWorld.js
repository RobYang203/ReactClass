import React from 'react';

function HelloWorld(props){  
    return(
      <>
            <h2>Hello {props.name}</h2>
            <p>This is a First Component</p>
     </>
     
    )
}

HelloWorld.defaultProps = {
    name:'World'
}

export default HelloWorld