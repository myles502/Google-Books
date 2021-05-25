import axios from "axios"
import React,{useState,useEffect} from "react"
import Hero from "../Hero";
import SearchForm from "../SearchForm";
import Booklist from "../BookList";
import API from "../../utls/API";
import BookCard from "../BookCard";

// function Searchpage() {
//     const [result, setResult ] = useState([{}]);
//     const [query,setQuery] = useState("Harry Potter")
    
//  const handleSubmit = event => {
//      event.preventDefault()
//      API.getBooks(query).then(res => {
//          console.log(res); 
//          setResult(res)
//         })
//  }
//  const handleInputChange = event => {
//      setQuery(event.target.value); 
//  }

//     return (
//       <>
//         <Hero />
//         <SearchForm handleSubmit={handleSubmit} handleInputChange = {handleInputChange} 
//         onSubmit={handleInputChange}/>
//         <Booklist />
//       </>
//     );
//   }
  
//   export default Searchpage;

  function SearchPage(){
    const [search,setSearch]=useState("");
    const [books,setBooks] = useState([]);

    const handleSearchFormSubmit = async(e) => {
     try {
      e.preventDefault();
      const trimmedSearch = search.trim();
      if (!trimmedSearch) return;

      const url = `https://www.googleapis.com/books/v1/volumes?q=${trimmedSearch}`;
      const res = await axios.get(url);
      setBooks(res.data.items || []);
    } catch (error){

    }
  };
  return (
  <div> 
     <Hero />
      <SearchForm 
       search={search}
       onSearchChange={(e)=> setSearch(e.target.value)}
       onSubmit={handleSearchFormSubmit} />
       <Booklist books={books}/>
       </div> 
      
  );
}   
  export default SearchPage; 