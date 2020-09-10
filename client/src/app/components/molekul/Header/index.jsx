import React from 'react'
import './header.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <div className="header-app">
            <p className="logo-app">FZ-Blog</p>
            <div className="menu-app">
                <ul>
                    <li onClick={()=> history.push('/')}>Home</li>
                    <li onClick={()=> history.push('/about')}>About</li>
                    <li>Contact</li>
                    <li onClick={()=> history.push('/adm-panel')}>Adm Panel</li>
                </ul>
            </div>
            {/* <p className="menu-item">Logout</p> */}
            <p className="menu-item" onClick={()=> history.push('/sign-in')}>Sign In</p>
        </div>
    )
}

export default Header
