import React from 'react'
import './blogList.scss'
import { bg1 } from '../../../../assets'

const BlogList = () => {
    return (
        <div className="blog-item">
            <img className="img-thumb" src={bg1} alt="post-img"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro asperiores suscipit ipsa veritatis excepturi delectus ipsum vitae rerum eaque ducimus aut dolores corporis assumenda a, possimus, maiores sit recusandae?</p>
            </div>
        </div>
    )
}

export default BlogList
