import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import err from "./err.png";//importing resource

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id); //getting the exact blog needed from the fetch by adding the id

    return ( 
        <div className="blog-details">
            {isPending && <div className="loading">loading...</div>}
            {error && <div className="error"><img src={err} alt="error"/>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;