import React, { useState, useEffect } from "react";
import List from "./components/list";
import AddOwnerForm from "./components/add-owner-form";
import { getOwners } from "./api-client/dogs-api";
import "./App.css";

function App() {
  const [owners, setOwners] = useState();

  const refreshList = () => {
    getOwners().then(setOwners);
  };
  useEffect(refreshList, []);

  return (
    <div className="App">
      <header>
        <h1>Dog App</h1>
      </header>
      <main>
        <h2>Owners</h2>

        <AddOwnerForm onSuccess={refreshList} />

        <List owners={owners} />
      </main>
      <footer>
        <a href="https://github.com/vegetabill/dogs-react-app">GitHub Source</a>
      </footer>
    </div>
  );
}

export default App;
