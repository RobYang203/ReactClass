import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Hello extends Component {
    handlerClick=()=>{
       this.props.parentClick("From Hello!!")
    }
    render() {
        return (
            <div>
                <h2 onClick={this.handlerClick}>子元件</h2>
                <p>Hello, {this.props.name}. You are {this.props.age + 5} years old.</p>
            </div>
        )
    }
}
Hello.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number
}
export default Hello
