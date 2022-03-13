import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { AiOutlinePlusSquare } from "react-icons/ai"
import { FaRegCompass, FaRegHeart, FaSistrix, FaTelegram } from "react-icons/fa";
import {ContextProvider} from "../Global/Context";
const Navbar = () => {
    const { model, openModel } = React.useContext(ContextProvider)
    console.log('my model',openModel)
    const openForms = ()=>{
        openModel();
    }
  return (
      <div className='navbar'>
          <div className='navbar-first'>
              <img src='/image/logo.png'></img>
          </div>
          <div className='navbar-middle'>
              <div className='navbar__middle-search'>
                <input trype="text" placeholder='Search' className='navbar__search'></input> 
                <FaSistrix className="searchIcon"/> 
              </div>    
          </div>
          <div className='navbar-last'>
              <li>
                  <MdHomeFilled className='navbar__icon'/>
              </li>
              <li>
                  <FaTelegram className='navbar__icon'/>
              </li>
              <li>
                  <AiOutlinePlusSquare className='navbar__icon'/>
              </li>
              <li>
                  <FaRegCompass className='navbar__icon'/>
              </li>
              <li>
                  <FaRegHeart className='navbar__icon'/>
              </li>
              <li onClick={openForms}>register/login</li>
          </div>
      </div>
  );
};

export default Navbar;

