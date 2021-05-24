import axios from "axios"

export default {
    getBooks: function(searchTerm){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+ searchTerm);
    }

}