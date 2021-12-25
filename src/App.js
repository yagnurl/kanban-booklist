import {React, useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import KanbanColumn from "./components/KanbanColumn/KanbanColumn";


function App() {

  // API_KEY : https://openlibrary.org/search.json?language=eng&author=OL23919A

  const [books, setBooks] = useState([])
  const [authorId, setAuthorId] = useState("OL23919A")

  useEffect(() =>{
    getBooks()
  }, [])

  // Fetch data and store them to books state
  const getBooks = () => {
    fetch(`https://openlibrary.org/search.json?language=eng&author=${authorId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBooks(data.docs)
    })
  }

  return (
    <>
      <Navbar />

      <div >

        <div className="boardTitle">
          <h3>{books[0].author_name}</h3>
        </div>

        <div className="searchBar">
          <span>books of</span>
          <input type="text" value={authorId} onChange={e => setAuthorId(e.target.value)} />
          <button type="submit" onClick={getBooks}> submit</button>
        </div>

      </div>

      <KanbanColumn books={books} />
    </>
  );
}

export default App;
