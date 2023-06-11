import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import postReducer from "../reducers/postReducer";


// function postReducer(state, action) {
    
//   switch (action.type) {
//     case "get-posts":
//     return  action.payload, { }  
    

      
//     default:
//       alert("No matching types!");
//       return state;
//   }
// }



const PostCard = () => {
  const [state, dispatch] = useReducer(postReducer, []);
  console.log(state)
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .then((error) => console.log(error));
  }, []);

  const postOnChange = (event) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + event.target.value)
      .then((response) => setSinglePost(response.data))
      .then((error) => console.log(error));
       
    dispatch({
      type: "get-posts",
      payload: singlePost,
    });
  };


  







  return (
    <div className="posts">
      <h3 className="postsh3">Posts</h3>
      <select onChange={postOnChange}>
        <option value="0">--choose post--</option>
        {posts.map((element) => (
          <option key={element.id} value={element.id}>
            {element.id}
          </option>
        ))}
      </select>

      <p>{'Post ' + singlePost.id + ' ' + 'by User ' + singlePost.userId}</p> 
      
      <p>{singlePost.title}</p> 
      <p>{singlePost.body}</p> 
      
    </div>
  );
};

export default PostCard;

// const [post, dispatch] = useReducer(postReducer, []);
//   const [posts, setPosts] = useState([])
//   useEffect(() => {
//     const loadPostsData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       // console.log(data)
//       dispatch({
//         type: "get-posts",
//         payload: data,
//       });
//     };
//     loadPostsData();
//   }, []);
