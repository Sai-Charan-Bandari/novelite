import React from 'react'
import { Link } from 'react-router-dom'

function Header({isMobile}) {
  return (
    <nav class="navbar navbar-dark bg-dark ps-2">
  <Link class="navbar-brand d-flex align-items-center container-fluid" to="https://github.com/Sai-Charan-Bandari/novelite" >
    <img src="/logo.png" width="60" height="60" class="d-inline-block align-top rounded-5" alt=""/>
   <h1 style={isMobile ?{fontFamily:'lobster' ,margin: 'auto'}:{fontFamily:'lobster' ,marginRight:'auto',marginLeft:15}}>Novelite</h1> 
  </Link>
    </nav>
  )
}

export default Header