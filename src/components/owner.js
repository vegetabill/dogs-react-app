import React from "react";

function Owner({ login, displayName }) {
  return (
    <li>
      {login} - {displayName}
    </li>
  );
}

export default Owner;
