import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoreContext } from './Provider'

function BlogCard({blog, index}) {
    const {setCurrentBlog} = useContext(CoreContext)

    return(
        <div className="blog-card">
            <img className="blog-img" alt="jasmine's water bottle" src="https://i.pinimg.com/originals/9d/f5/6c/9df56cf907a1fc965c5f209c630f3a06.png"/>
            <div className="blog-content">
                <p className="blog-title">{blog.title}</p>
                <p className="blog-date">{blog.date}</p>
                <p className="blog-snippet">{blog.content}</p>

                <Link to="/blog" onClick={() => setCurrentBlog(index)}>Read more</Link>
            </div>
        </div>
    )
}

export default BlogCard