import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              React Site
          </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">
                    首頁
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    關於我們
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact/">
                    聯絡我們
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/store/sony">
                    商城
                </Link>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Nav
