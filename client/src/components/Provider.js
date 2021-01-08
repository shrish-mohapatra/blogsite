import React, { createContext, useState } from 'react'

export const CoreContext = createContext({
    blogs: [],
    currentBlog: 0
})

export const CoreProvider = ({children}) => {
    const [blogs, setBlogs] = useState([
        {title: "My first blog", date: "Jan 8, 2021", content: "Content snippet..."},
        {title: "My second blog", date: "Jan 8, 2021", content: "Content snippet..."},
        {title: "My third blog", date: "Jan 8, 2021", content: "Content snippet..."},
        {title: "My first blog", date: "Jan 8, 2021", content: "Content snippet..."},
        {title: "My first blog", date: "Jan 8, 2021", content: "Content snippet..."},
        {title: "My first blog", date: "Jan 8, 2021", content: "Content snippet..."}
    ])
    const [currentBlog, setCurrentBlog] = useState(0)

    return(
        <CoreContext.Provider
            value={{
                blogs,
                currentBlog,
                setCurrentBlog
            }}
        >
            {children}
        </CoreContext.Provider>
    )
}