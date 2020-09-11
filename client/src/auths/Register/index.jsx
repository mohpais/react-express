import React, { Component } from 'react'
import './register.scss'
import { bg1 } from '../../assets'
import { Input, Button, Gap, Link } from '../components'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    onSubmit = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div className="main-page">
                <div className="left">
                    <img src={bg1} className="bg-image" alt="defaultImg"/>
                </div>
                <div className="right">
                    <p className="title">Sign Up</p>
                    <Input 
                        id="fullname"
                        label="Fullname" 
                        type="text" 
                        onChange={this.onChange}
                        placeholder="Type your name" />
                    <Gap height={18} />
                    <Input
                        id="email"
                        label="Email" 
                        type="email" 
                        onChange={this.onChange}
                        placeholder="Type your email" />
                    <Gap height={18} />
                    <Input
                        id="password"
                        label="Password" 
                        type="password" 
                        onChange={this.onChange}
                        placeholder="Type password" />
                    <Gap height={18} />
                    <Input 
                        id="repass"
                        label="Re-Password" 
                        type="password" 
                        onChange={this.onChange}
                        placeholder="Type re-password" />
                    <Gap height={20} />
                    <Button 
                        onClick={this.onSubmit}
                        label="Regist" 
                        className="button button-p" 
                        type="submit" />
                    <Gap height={100} />
                    <Link title="Kembali ke Login" />
                </div>
            </div>
        )
    }
}

export default Register
