import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Login from './components/Login';
import Signup from './components/Signup';
import Fileupload from './components/fileupload';
import Footer from './footer';
import Home from './components/Home';
import BrowseVideos from './components/downloadfile';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Header></Header>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/upload" component={Fileupload}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/download" component={BrowseVideos}></Route>
    <Footer></Footer>
    </BrowserRouter>
  </div>
  );
}

export default App;
