import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Login from './components/Login';
import Signup from './components/Signup';
import Fileupload from './components/fileupload';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Header></Header>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/upload" component={Fileupload}></Route>
    </BrowserRouter>
  </div>
  );
}

export default App;
