import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new website",body: "lorem ipsum...",author: "metin",id: 1},
        {title: "SA hosgeldin asqumm",body: "lorem ipsum...",author: "brna",id: 2},
        {title: "metin react yaziyor ne alaka amk",body: "lorem ipsum...",author: "metin",id: 3}
    ]);

    const [name, setName] = useState("metin");

    const handleDelete = (id) => {

        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        
    }

    // good place to fetch data 
    useEffect(()=> {
        console.log("use effect ran");
        console.log(name);
    },[name])

    return (
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs" handleDelete={handleDelete}/>
            <button onClick={()=> setName("luigi")}>change name</button>
            <p>{name}</p>
            
        </div>
    );
}
export default Home;
