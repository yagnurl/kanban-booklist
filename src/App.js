import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import KanbanColumn from "./components/KanbanColumn/KanbanColumn";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/Loading/Loading";

import "./style.scss";
import "./global.scss";

function App() {
  // API_KEY : https://openlibrary.org/search.json?language=eng&author=OL23919A

  const [books, setBooks] = useState([]);
  const [authorId, setAuthorId] = useState("OL23919A");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks();
  }, []);

  // Fetch data and store them to books state
  const getBooks = () => {
    let mounted = true;

    fetch(`https://openlibrary.org/search.json?language=eng&author=${authorId}`)
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          console.log("data:", data);
          setBooks(data.docs);
          setLoading(false);
        }
      });
    return function cleanup() {
      mounted = false;
    };
  };

  return (
    <>
      <Navbar />
      <div className="topSection">
        <div className="boardTitle fs-28">
          <h3 className="fs-28">
            {typeof books != undefined &&
              books.length > 0 &&
              books[0].author_name}
          </h3>
        </div>

        <div className="searchBar">
          <span className="fs-14">books of</span>
          <input
            type="text"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          />
          <button className="fs-12" type="submit" onClick={getBooks}>
            {" "}
            submit
          </button>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : books.length !== 0 ? (
        <KanbanColumn books={books} />
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default App;
