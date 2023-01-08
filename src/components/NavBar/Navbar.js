import {React, useState} from 'react'
import '../MainScreen/Main.css'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    const menuToggle = () => {
       setToggle(!toggle);
       console.log(toggle)
    }

    const MobileNav = () => {
        return (
          <nav className='mobile-nav' >
            <div  className="mobile-nav_topbar">
                <ul className='mobile-nav_topbar_list1'>
                <li className='mobile-nav_topbar_list1_item'> <AiOutlineMenu size={50} color={'#e91e63'} onClick={menuToggle}/></li>
                </ul>
                <ul className='mobile-nav_topbar_list2'>
                <li className='mobile-nav_topbar_list2_item'> Nabeel Javed </li>
                <li className='mobile-nav_topbar_list2_item'> 
                   <Link to='/' className="main-header__brand">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwj2YK4IT8kJKQS7a57mwtW1tDedIj4lobQ&usqp=CAU" alt="description"/>
                   </Link>
                </li>
                
                </ul>
            </div>
          <ul className="mobile-nav__items">
              <li className="mobile-nav__item">
                  <Link to="/property">Property</Link>
              </li>
              <li className="mobile-nav__item">
                  <Link to="/contract">Tenant Contract</Link>
              </li>
              <li className="mobile-nav__item mobile-nav__item--cta">
                  <Link to="/rooms">Rooms</Link>
              </li>
           </ul>
        </nav>
      )
    }


  return (
    <div className='main-nav'>
    <nav className="main-nav">
          <ul className='login_status'>
            <li>Nabeel Javed</li>
            <li>
            <Link to="/" className="main-header__brand">
              <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="uHost"/>
            </Link>
            </li>
          </ul>
  
          <ul className="main-nav__items">
              <li className="main-nav__item main-nav__item_first">
                <AiOutlineMenu size={50} color={'#e91e63'} onClick={menuToggle}/>
              </li>
              <li className="main-nav__item main-nav__item_second">
                  <Link to='/property'>Craft Property Management</Link>
              </li>
              <li className="main-nav__item">
                  <Link  to='/property'>Property</Link>
              </li>
              <li className="main-nav__item">
                  <Link  to='/contract'>Tenant Contarct</Link>
              </li>
              <li className="main-nav__item main-nav__item--cta">
                  <Link  to='/rooms'>Rooms</Link>
              </li>
          </ul>
      </nav>
      {toggle && <MobileNav/> }
    </div> 
  )
}
