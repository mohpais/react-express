import React, { Component } from 'react'
import {Header, Footer} from '../../components'
import './mainApp.scss'

export default class Main extends Component {
    render() {
        return (
            <div className="main-app-wrapper">
                {/* <div className="header-wrapper">
                </div> */}
                <Header />

                <div className="content-wrapper">
                    {this.props.children}
                </div>
                {/* <div className="footer-wrapper">
                    <Footer />
                </div> */}
                <Footer />
            </div>
        )
    }
}
