import React from 'react'
import SigninContent from '../components/SigninContent';
import logo from "../img/trntit.png";

import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	Outlet
  } from "react-router-dom";
import SigninForgortPass from '../components/SigninForgortPass';
import SiginNewPass from '../components/SiginNewPass';


function Signin() {
  return (
	<div class="limiter">
		<div class="container-login100">
		<img src={logo} className="fluid-img m-4" />

		<div class="wrap-login100">
		
        <Routes>
          <Route exact path='/' element ={<SigninContent/>}/>
          <Route exact path='signinforgotpass' element ={<SigninForgortPass/>}/>
          <Route exact path='/signinnewpass' element ={<SiginNewPass/>}/>
        </Routes>

		
		</div>
		</div>
	</div>
	
  )
}

export default Signin