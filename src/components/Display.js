import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const {userList} = useSelector((state)=> state.item)
  return (
    <div>
      <ul>
        {userList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
