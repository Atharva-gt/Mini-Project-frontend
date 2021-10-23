import { NavLink } from "react-router-dom";

const Header =() =>{
    return(
        <header className="p-2 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center ">
         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="" className="nav-link px-2 text-white">Home</NavLink></li>
          {/* <li><NavLink to="" className="nav-link px-2 text-white">Features</NavLink></li>
          <li><NavLink to="" className="nav-link px-2 text-white">Pricing</NavLink></li>
          <li><NavLink to="" className="nav-link px-2 text-white">FAQs</NavLink></li> */}
          <li><NavLink to="" className="nav-link px-2 text-white">About</NavLink></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <NavLink to="/login" ><button type="button" className="btn btn-outline-light me-2">Login</button></NavLink>
          <NavLink to="/signup" ><button type="button" className="btn btn-warning">Sign-up</button></NavLink>
        </div>
      </div>
    </div>
  </header>
    );
}
export default Header;