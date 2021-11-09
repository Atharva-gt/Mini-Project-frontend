import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Fileupload from "./components/fileupload";
import Footer from "./footer";
import BrowseFiles from "./components/browseFile";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/upload" component={Fileupload}></Route>
        <Route path="/browse" component={BrowseFiles}></Route>
        <Route path="/home" component={Home}></Route>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
