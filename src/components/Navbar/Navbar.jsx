import React from 'react'
import Logo from '../../img/logo.svg'
import './style.scss'
export default function Navbar() {
    return (
         <header>
           <div className="logo">
               <img src={Logo} alt="" />
           </div>
       </header>
    )
}
