import React, { useState } from 'react'
import './React.css'
import menu_icon from "../component/assets/menu.png";
import logo from "../component/assets/youtubelogo.png";
import search_icon from "../component/assets/search.png";
import upload_icon from '../component/assets/upload.png';
import more_icon from '../component/assets/more.png';
import notification_icon from '../component/assets/notification.png';
import profile_icon from '../component/assets/gerard.png';
import { Link } from 'react-router-dom'


const Navbar = ({ setSidebar, onSearch}) => {

  const [searchInput, setSearchInput] = useState ('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="" />
        <Link to='/'><img className="logo" src={logo} alt="" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <form onSubmit={handleSearchSubmit} className="flex-div">
            <input 
              type="text" 
              placeholder="search" 
              value={searchInput} 
              onChange={(e) => setSearchInput(e.target.value)} 
            />
            <button type="submit" className="search-button">
              <img src={search_icon} alt="" />
            </button>
          </form>
        </div>
        
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
}

export default Navbar