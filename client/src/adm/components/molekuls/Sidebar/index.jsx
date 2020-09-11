import React from 'react'
import './sidebar.scss'
import { useHistory } from 'react-router-dom'
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

const Siderbar = () => {
    const history = useHistory()
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="sidebar-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item py-2" onClick={()=> {history.push('/adm-panel')}}>
                        <div className="row" style={{fontWeight: '600'}}>
                            <div className="col-auto">
                                <FontAwesomeIcon className="feather" icon={faHome} />
                            </div>
                            <div className="col-auto my-auto pl-0">
                                <span>Dashboard</span>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item py-2" onClick={()=> {history.push('/adm-panel/blog')}}>
                        <div className="row" style={{fontWeight: '600'}}>
                            <div className="col-auto">
                                <FontAwesomeIcon className="feather" icon={faBook} />
                            </div>
                            <div className="col-auto my-auto pl-0">
                                <span>Blog</span>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item py-2" onClick={()=> {history.push('/adm-panel/member')}}>
                        <div className="row" style={{fontWeight: '600'}}>
                            <div className="col-auto">
                                <FontAwesomeIcon className="feather" icon={faUser} />
                            </div>
                            <div className="col-auto my-auto pl-0">
                                <span>Member</span>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item py-2" onClick={()=> {history.push('/')}}>
                        <div className="row" style={{fontWeight: '600'}}>
                            <div className="col-auto">
                                <FontAwesomeIcon className="feather" icon={faSignOutAlt} />
                            </div>
                            <div className="col-auto my-auto pl-0">
                                <span>Back to Home</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Siderbar
