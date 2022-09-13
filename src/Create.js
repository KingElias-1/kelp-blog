import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('Title');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Femi');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newBlog = {title, body, author};

        fetch('http://localhost:8000/blogs', 
            {method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newBlog)
        }).then(() =>{
            console.log('new blog added');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) =>setTitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) =>setBody(e.target.value)}
                />

                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e) =>setAuthor(e.target.value)}>
                    <option value="Femi">Femi</option>
                    <option value="Elias">Elias</option>
                    <option value="Oyewole">Oyewole</option>
                    <option value="James">James</option>
                </select>

                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;