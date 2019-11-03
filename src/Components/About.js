import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Organication from './Organication'
import Management from './Management'
export class About extends Component {
    render() {
        console.log(this.props.match);
        return (
            <>

                <h3>
                    About Page
            </h3>

                <div className="row">
                    <div className="col-3">
                        <div className="list-group">
                            <Link to={`${this.props.match.url}/organication`} className="list-group-item list-group-item-action">組織架構</Link>
                            <Link to={`${this.props.match.url}/management`} className="list-group-item list-group-item-action">經營團隊</Link>
                        </div>
                    </div>
                    <div className="col-9">
                        <Switch>
                            <Route path={`${this.props.match.path}/organication`} component={Organication}></Route>
                            <Route path={`${this.props.match.path}/management`} component={Management}></Route>
                        </Switch>
                    </div>
                </div>








            </>
        )
    }
}

export default About

