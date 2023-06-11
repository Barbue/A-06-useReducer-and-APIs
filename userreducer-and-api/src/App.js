import "./App.css";

import React, { useEffect, useState, useReducer } from "react";
//import postReducer from "./reducers/postReducer";
import PostCard from "./components/PostCard";
import TodosCard from "./components/TodosCard";
import UsersCard from "./components/UsersCard";



function App() {

  
  // const [todos, dispatch1] = useReducer(postReducer, []);
  
  // useEffect(() => {
  //   const loadTodosData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     const data = await response.json();
  //     // console.log(data)
  //     dispatch1({
  //       type: "get-todos",
  //       payload: data,
  //     });
  //   };
  //   loadTodosData();
  // }, []);

  // const [users, dispatch2] = useReducer(postReducer, []);
  // useEffect(() => {
  //   const loadUsersData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.json();
  //     // console.log(data)
  //     dispatch2({
  //       type: "get-users",
  //       payload: data,
  //     });
  //   };
  //   loadUsersData();
  // }, []);










  return (
    <div className="App">

      <PostCard/>
      
      <TodosCard/>
      <UsersCard/>


      {/* {post.map((element) => {
        return (
           <PostCard
          key={element.id}
          userId={element.userId}
          id={element.id}
          title={element.title}
          body={element.body}
        />
       
        )
        
        
      })
    }  */}





    {/* {todos.map((element) => {
        return (
        <TodosCard
          key={element.id}
          userId={element.userId}
          id={element.id}
          title={element.title}
          completed={element.completed}
        />
        )
        
        
      })
    }  */}

{/* {users.map((element) => {
        return (
        <UsersCard
          key={element.id}
          id={element.id}
          name={element.name}
          username={element.username}
          email={element.email}
          address={element.address}
          geo={element.geo}

        />
        )
        
        
      })
    }  */}

{/* {todos.map((element) => {
        return (
        <TodosCard
          key={element.id}
          id={element.id}
          name={element.name}
          username={element.username}
          email={element.email}
          address={element.address}
          phone={element.phone}
          website={element.website}
          company={element.company}



        />
        )
        
        
      })
    }  */}

{/* <label for="lists">Choose an option:</label> */}


  


    </div>
  );
}

export default App;
