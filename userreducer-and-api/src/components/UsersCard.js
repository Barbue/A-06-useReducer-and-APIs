import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import postReducer from "../reducers/postReducer";

const UsersCard = () => {
  const [state, dispatch] = useReducer(postReducer, []);
  
  const [users, setUsers] = useState([]);
  const [singleuser, setSingleUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .then((error) => console.log(error));
  }, []);

  const userOnChange = (event) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + event.target.value)
      .then((response) => setSingleUser(response.data))

      .then((error) => console.log(error));

    dispatch({
      type: "get-users",
      payload: singleuser,
    });
  };
  console.log(state)
  return (
    <div className="users">
      <h3 className="usersh3">Users</h3>
      <select onChange={userOnChange}>
        <option value="0">--choose user--</option>
        {users.map((element) => (
          <option key={element.id} value={element.id}>
            {element.id}
          </option>
        ))}
      </select>

      <p>{"Post " + singleuser.id + " " + "by User " + singleuser.username}</p>

      <p>{singleuser.name}</p>
      <p>{singleuser.email}</p>

      {/* <p>{singleuser.address.street}</p> */}
      {/* <p>{singleuser.address.suite}</p>
      <p>{singleuser.address.city}</p>
      <p>{singleuser.address.zipcode}</p>  
      <p>{singleuser.address.geo.lat}</p> 
      <p>{singleuser.address.geo.lng}</p>  
      <p>{singleuser.phone}</p>
      <p>{singleuser.website}</p>
      <p>{singleuser.company.name}</p>
      <p>{singleuser.company.catchPhrase}</p>
      <p>{singleuser.company.bs}</p>   */}
    </div>
  );
};

export default UsersCard;

// import React from 'react'

// const UsersCard = (props) => {
//   return (
//     <div>

//        <h2>{props.name}</h2>
//        <h3>{props.username}</h3>
//        <h3>{props.email}</h3>
//        <h3>{props.address.street}</h3>
//        <h3>{props.address.suite}</h3>
//        <h3>{props.address.city}</h3>

//        <h3>{props.address.zipcode}</h3>
//        <h3>{props.address.geo.lat}</h3>
//        <h3>{props.address.geo.lng}</h3>
//        <h3>{}</h3>
//        <h3>{}</h3>
//        <h3>{}</h3>
//        <h3>{}</h3>
//        <h3>{}</h3>

//     </div>
//   )
// }

// export default UsersCard
