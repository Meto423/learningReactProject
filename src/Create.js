import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');


// we tracked the value of the input with the state variable title, and we updated the state variable with the onChange event handler.

    return ( 
        <div className="create">
            <h2>Add a new Blog madafaka</h2>
            <form>
                <label>Blog Title</label>
                <input type="text"
                required
                value={title}
                onChange= {(e) => setTitle(e.target.value)} 
                
                />

                 <label>Blog Body:</label>
                <textarea required
                
                value = {body}
                onChange = {(e) => setBody(e.target.value)} >
                    
                </textarea>
                 <label>Blog author:    </label>
                 <select 
                 value = {author}
                 
                 onChange = {(e) => setAuthor(e.target.value)}
                 > 
                    <option value="mario">mario</option>
                    <option value="metin">metin</option>
                    
                 </select>
                 <button>Add Blog</button>
                 <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;