import React, { useState } from "react";
import { createOwner } from "../api-client/dogs-api";

// https://reactjs.org/docs/forms.html
export default function AddOwnerForm({ onSuccess }) {
  const [login, setLogin] = useState();
  const [displayName, setDisplayName] = useState();

  // A little higher-order function magic since this pattern is repeated
  // in all forms. Also done explicitly below in the second input.
  const linkState = (value, setter) => {
    return {
      onChange: e => {
        setter(e.target.value);
      },
      value
    };
  };

  const onSubmit = e => {
    e.preventDefault();
    createOwner({ login, displayName }).then(onSuccess);
  };
  return (
    <form onSubmit={onSubmit}>
      <h3>Add Owner</h3>
      <label>
        login:{" "}
        <input
          type="text"
          {...linkState(login, setLogin)}
          placeholder="pomfan93"
        />
      </label>
      <label>
        display name:
        <input
          type="text"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          placeholder="J. Doe"
        />
      </label>
      <input type="submit" value="Save" />
    </form>
  );
}
