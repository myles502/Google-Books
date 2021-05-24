import {Link, NavLink,useLocation} from "react-router-dom"


function Navbar(){
const {pathname} = useLocation();
return (
 <nav className="navbar navbar-light bg-light">
     <Link className="navbar-brand" href="/">
         React Google Books
     </Link>

 <ul className ="navbar-nav flex-row mr-auto">
     <li className="nav-item mx-3 active">
         <NavLink className="nav-link"exact to="/">
             Search {pathname === "/" && <span className="sr-only">(current)</span>}
         </NavLink>
     </li>
     <li className="nav-item">
         <NavLink className="nav-link" to="/saved">
             Saved {pathname === "/saved" && <span className="sr-only">(current)</span>}

         </NavLink>
     </li>
      
 </ul>
 </nav>
);
}
export default Navbar;

