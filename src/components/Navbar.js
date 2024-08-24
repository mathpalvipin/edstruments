import "./style.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [collapse ,setcollapse] = useState(true);

  return (
    <>
    
    <nav className="navbar">
    
      <div className={`navLink  ${collapse? "change":""}`}>
      <NavLink
        className="navItems"
        to="/one"
        onClick={()=>setcollapse(prev=> !prev)}
      >
        {" "}
        One
      </NavLink>
      <NavLink className="navItems" to="/two" onClick={()=>setcollapse(prev=> !prev)}>
        Two
      </NavLink>
      <NavLink className="navItems" to="/three" onClick={()=>setcollapse(prev=> !prev)}>
        Three
      </NavLink>
      </div>
      <div className="burger">
        <div className="navItems" onClick={()=>setcollapse(prev=> !prev)}>
          <div className={`bar1  ${collapse? "change":""}`}></div>
          <div className={`bar2  ${collapse? "change":""}`}></div>
          <div className={`bar3  ${collapse? "change":""}`}></div>
        </div>
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;
