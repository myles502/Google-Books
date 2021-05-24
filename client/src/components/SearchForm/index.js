function SearchForm({handleInputChange, handleSubmit}){
    return <div className = "container">
         <input className="form-control form-control-sm" type="text" 
         placeholder="enter your book title" name = "query"
         onChange={handleInputChange}/>
         <button type="submit" className="btn btn-primary" onClick= {handleSubmit}>Search</button>
         </div>
}
export default SearchForm;