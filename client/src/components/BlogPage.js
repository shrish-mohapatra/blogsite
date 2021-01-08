import React, { useContext } from 'react'
import { CoreContext } from './Provider';
import { Link } from 'react-router-dom'

function BlogPage() {
    const { blogs, currentBlog } = useContext(CoreContext);

    return(
        <div className="blog-page">
            <p className="blog-page-title">{blogs[currentBlog].title}</p>
            <p className="blog-page-date">{blogs[currentBlog].date}</p>
            <p className="blog-page-content">{blogs[currentBlog].content}</p>

            <Link to="/home">Go back</Link>
        </div>
    )
}

export default BlogPage