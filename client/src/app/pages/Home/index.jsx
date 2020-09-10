import React from 'react'
import './home.scss'
import { BlogList } from '../../components'

const Home = () => {
    return (
        <div className="home-page-wrapper">
            <div className="content-wrapper">
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
            </div>
        </div>
    )
}

export default Home
