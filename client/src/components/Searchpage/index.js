import React,{useState,useEffect} from "react"
import Hero from "../Hero";
import SearchForm from "../SearchForm";
import Booklist from "../BookList";
import API from "../../utls/API";

function Searchpage() {
    const [result, setResult ] = useState([{}]);
    const [query,setQuery] = useState("Harry Potter")
 const handleSubmit = event => {
     event.preventDefault()
     API.getBooks(query).then(res => {
         console.log(res); 
         setResult(res)
        })
 }
 const handleInputChange = event => {
     setQuery(event.target.value); 
 }

    return (
      <>
        <Hero />
        <SearchForm handleSubmit={handleSubmit} handleInputChange = {handleInputChange}/>
        <Booklist />
      </>
    );
  }
  
  export default Searchpage;