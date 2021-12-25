import React from "react";
import Navbar from "./components/Navbar/Navbar";
import KanbanColumn from "./components/KanbanColumn/KanbanColumn";


function App() {
  return (
    <>
      <Navbar />

      <div >

        <div className="boardTitle"></div>

        <div className="searchBar">
          <span>books of</span>
          <input type="text" />
          <button type="submit">submit</button>
        </div>

      </div>

      <KanbanColumn />
    </>
  );
}

export default App;
