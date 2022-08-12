const BlogList = ({blogs, title /* here the props are collected for use and can be called*/}) => {
    
    return ( 
        <div className="blog-list">
            <h2 className="blog-list-title">{title}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <button className="delete-blog">delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;