import React, { useState } from "react";
import { setUser } from "../itemSlice";
import { useDispatch } from "react-redux";


export const Form = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState("");

  const handleOnSubmit = (e) => {
   e.preventDefault()
   dispatch( setUser(name))
  
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="sam smith"
        />
        <button>Add data</button>
      </form>
    </div>
  );
};
