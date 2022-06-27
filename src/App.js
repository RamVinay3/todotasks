import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Login from './login';
import Admin from './admin'
// import Nav from './nav';
// import Tasks from './tasks'
// import Topbar from './topbar'
// import Nav from './nav'
import Signin from './signin';
import Homepage from './homepage';
import { Route, Router, Routes } from 'react-router-dom';



function App() {
  return (
    // <Tasks></Tasks>
    // <Nav></Nav>
    // <Topbar></Topbar>
    // <Homepage></Homepage>
    // <Login></Login>
    // <Signin/>
    // <Admin></Admin>
       <Routes>
         <Route path='/' element={<Login></Login>}></Route>
         <Route path='/signup' element={<Signin></Signin>}></Route>
         <Route path='/homepage' element={<Homepage></Homepage>}></Route>
       </Routes>
  );
}

export default App;
