import React from "react";
import { deleteOwner } from "../api-client/dogs-api";

function Owner({ login, displayName, afterDelete }) {
  const onClick = () => {
    deleteOwner(login).then(afterDelete);
  };
  return (
    <li>
      {login} - {displayName}
      <button onClick={onClick}>Delete</button>
    </li>
  );
}

export default Owner;
