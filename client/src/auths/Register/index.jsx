import React from 'react'
import './register.scss'
import { bg1 } from '../../assets'
import { Input, Button, Gap, Link } from '../components'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={bg1} className="bg-image" alt="defaultImg"/>
            </div>
            <div className="right">
                <p className="title">Sign Up</p>
                <Input label="Fullname" type="text" placeholder="Type your name" />
                <Gap height={18} />
                <Input label="Email" type="email" placeholder="Type your email" />
                <Gap height={18} />
                <Input label="Password" type="password" placeholder="Type password" />
                <Gap height={18} />
                <Input label="Re-Password" type="password" placeholder="Type re-password" />
                <Gap height={20} />
                <Button label="Regist" className="button button-p" type="submit" />
                <Gap height={100} />
                <Link title="Kembali ke Login" />
            </div>
        </div>
    )
}

export default Register
