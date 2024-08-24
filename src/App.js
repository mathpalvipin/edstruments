
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <div className="content"><Outlet/></div>
     <div class="footer"><Footer></Footer></div>
    </div>
  );
}

export default App;
