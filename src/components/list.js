import React from "react";
import Owner from "./owner";

function List({ owners }) {
  if (!owners) {
    return null;
  }
  if (owners.length === 0) {
    return "No owners found";
  }
  return (
    <ul className="owners">
      {owners.map(owner => (
        <Owner key={owner.login} {...owner} />
      ))}
    </ul>
  );
}

export default List;
