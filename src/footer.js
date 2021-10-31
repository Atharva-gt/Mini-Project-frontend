import { NavLink } from "react-router-dom";
import './footer.css';
const Footer=()=>{
    return(
        <div className="ft">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-1">
    <div className="col-md-4 d-flex align-items-center">
      <span className="text">&copy; 2021 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><NavLink className="text-muted" to="#"><svg className="bi" width="24" height="24"></svg></NavLink></li>
      <li className="ms-3"><NavLink className="text-muted" to="#"><svg className="bi" width="24" height="24"></svg></NavLink></li>
      <li className="ms-3"><NavLink className="text-muted" to="#"><svg className="bi" width="24" height="24"></svg></NavLink></li>
    </ul>
  </footer>
</div>
    )
}
export default Footer;