import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import './header.css';

const Header =() =>{
    return(
      <div className=" bd">
      <header className="d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-5 ">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="" className="nav-link px-3 link-dark"><HomeIcon className="fit" />Home</NavLink></li>
          <li><NavLink to="/upload" className="nav-link px-2 link-dark"><DriveFolderUploadRoundedIcon className="fit"/>Upload</NavLink></li>
          <li><NavLink to="#" className="nav-link px-2 link-dark"><DownloadingRoundedIcon className="fit" />Download</NavLink></li>
          <li><NavLink to="#" className="nav-link px-2 link-dark"><InfoRoundedIcon className="fit" />About</NavLink></li>
        </ul>
  
        <div className="col-md-3 text-end">
         <NavLink to="/login" > <button type="button" className="btn btn-outline-dark me-2">Login</button></NavLink>
         <NavLink to="/signup"> <button type="button" className="btn btn-dark">Sign-up</button></NavLink>
        </div>
      </header>
    </div>
    );
}
export default Header;