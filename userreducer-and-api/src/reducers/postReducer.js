import React, { useEffect, useState, useReducer } from "react";

export default function postReducer(state, action) {
  switch (action.type) {
    case "get-posts":
      return action.payload;
    case "get-todos":
      return action.payload;
    case "get-users":
      return action.payload;

    default:
      alert("No matching types!");
      return state;
  }
}
