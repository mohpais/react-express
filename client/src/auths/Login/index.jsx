import React from 'react'
import { bg2 } from '../../assets'
import { Input, Button, Gap, Link } from '../components'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left">
                <img src={bg2} className="bg-image" alt="defaultImg"/>
            </div>
            <div className="right">
                <p className="title">Sign In</p>
                <Input label="Email" type="email" placeholder="Type your email" />
                <Gap height={18} />
                <Input label="Password" type="password" placeholder="Type password" />
                <Gap height={18} />
                <Button label="Login" className="button button-p" type="submit" />
                <Gap height={100} />
                <Link onClick={() => { history.push('/sign-up')}} title="Belum punya akun, silahkan daftar!" />
            </div>
        </div>
    )
}

export default Login
