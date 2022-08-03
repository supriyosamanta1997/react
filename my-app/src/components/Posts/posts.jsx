import { useState } from "react";

function Posts(){
    const [posts,setPosts]=useState([]);
    const handleFetchData= async ()=>{
        try{
            const res= await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const data= await res.json()
            console.log(data)
            setPosts(data)
        }
        catch(err){
            console.log("error")
        }
    }
    console.log(posts)
    return (
        <div>
            <h3>Posts</h3>
            <button onClick={handleFetchData}>Get Posts</button>
            <ul>
                {posts.map((items)=><li> key{items.id}={items.title}</li>)}
            </ul>

        </div>
    )
}

export default Posts;