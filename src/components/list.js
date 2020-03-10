import React from "react";
import Owner from "./owner";

function List({ owners, afterDelete }) {
  if (!owners) {
    return null;
  }
  if (owners.length === 0) {
    return "No owners found";
  }
  return (
    <ul className="owners">
      {owners.map(owner => (
        <Owner key={owner.login} afterDelete={afterDelete} {...owner} />
      ))}
    </ul>
  );
}

export default List;
