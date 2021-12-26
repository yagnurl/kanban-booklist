import {React, useState, useEffect} from "react";
import Loader from "react-loader-spinner";

import Navbar from "./components/Navbar/Navbar";
import KanbanColumn from "./components/KanbanColumn/KanbanColumn";
import NotFound from "./components/NotFound/NotFound";

import './style.scss'
import './global.scss'

function App() {

  // API_KEY : https://openlibrary.org/search.json?language=eng&author=OL23919A

  const [books, setBooks] = useState([])
  const [authorId, setAuthorId] = useState("OL23919A")
  const [dataLoaded, setDataLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() =>{
    if(getBooks() === null | undefined)  {
      setNotFound(true)
    }
  }, [])

  // Fetch data and store them to books state
  const getBooks = () => {
    fetch(`https://openlibrary.org/search.json?language=eng&author=${authorId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBooks(data.docs)
      setDataLoaded(true)
      setLoading(false)
    })
  }

  
  return (
    <>
      <Navbar />
      <div className="topSection">
        <div className="boardTitle fs-28">
          <h3 > 
            { 
            dataLoaded && (books[0].author_name === undefined || null  ? "Unknown Author" : books[0].author_name)
            }
          </h3>
          
        </div>

        <div className="searchBar">
          <span className="fs-14">books of</span>
          <input type="text" value={authorId} onChange={e => setAuthorId(e.target.value)} />
          <button className="fs-12" type="submit" onClick={getBooks}> submit</button>
        </div>

      </div>
         {
          
            (loading 
              ? 
                <div className="loader">
                    <Loader type="TailSpin" width={20} height={20} color="#2F2432"/> 
                    <span>Loading...</span> 
                </div>
              
              : <KanbanColumn books={books} /> 
            ) 

         } 
           
        
    </>
  );
}

export default App;
