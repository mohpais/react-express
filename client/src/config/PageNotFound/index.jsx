import React from 'react'
import './pageNotFound.scss'
import { useHistory } from 'react-router-dom'

const PageNotFound = () => {
    const history = useHistory()
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <span onClick={()=> {history.push('/')}}>Go TO Homepage</span>
            </div>
        </div>
    )
}

export default PageNotFound
