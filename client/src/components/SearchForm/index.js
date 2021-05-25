import Hero from "../Hero";

function SearchForm({search, onSearchChange,onSubmit}){
    return (
        <div title ="Book Search">
            <form className="d-flex flex-column" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="search">Book</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="search"
                    value={search}
                    onChange={onSearchChange}
                    />
                </div>
                <button className="btn btn-primary ml-auto px-5">Search</button>
            </form>
        </div>
    )
}
export default SearchForm;