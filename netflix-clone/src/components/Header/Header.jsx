import React from 'react'
import "./header.css";
import NetflixLogo from "../../assets/images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Header = () => {
  return (

      <div className='header_outer_container'>
        <div className='header_container'>
      <div className="header_left">
          <ul>
              <img  src={NetflixLogo} alt='Netflix logo' width="100"/>
              <li>Netflix</li>
              <li>Home</li>
              <li>TVshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browse by language</li>
          </ul>
      </div>
      <div className="header_right">
          <ul>
              <li><SearchIcon/></li>
              <li><NotificationsNoneIcon/></li>
              <li><AccountBoxIcon/></li>
              <li><ArrowDropDownIcon/></li>
          </ul>
      </div>

  </div>
  </div>
     
    
  )
}

export default Header