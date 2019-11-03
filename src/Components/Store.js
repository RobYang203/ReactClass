import React, { Component } from 'react'

export class Store extends Component {
    render() {
       console.log(this.props.match)
        //console.log(this.props.match.params.category)
        return (
            <div>
                Store Page - {this.props.match.params.category}
            </div>
        )
    }
}

export default Store
