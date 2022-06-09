import React, { useEffect,useState } from "react";


import { Link } from "react-router-dom";
import logo from "../img/trntit.png";
import avatar from "../img/avatar.jpg";


function Header() {
    
   const data = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div>
            <nav id="sidebarMenu" class="col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-md-block sidebar collapse p-0">
                <div class="h-100 d-flex flex-column">
                    <div class="site-header my-4 px-5 d-sm-none d-md-block">
                        <img src={logo} class="fluid-img" />
                    </div>
                    <div class="user=info d-flex flex-column w-100 align-items-center my-3">
                        <div class="user-avatar">
                            <img src={avatar} class="fluid-img" />
                        </div>
                        <div class="user-name mt-2">Admin</div>
                        <div class="user-email">{data.email}</div>
                    </div>
                    <div class="pt-3 flex-grow-1 headerclass">
                        <ul class="nav flex-column mt-2">

                            <Link to={"/"} >
                            <li id="users" class="nav-item nav-link unactive"  >
                            <a class="nav-link" href="#">
                                <i class="mdi mdi-account me-2"></i> Users     
                            </a>
                            </li>
                            </Link>

                            
                            <Link to={"/agent"} >
                            <li id="agents" class="nav-item nav-link unactive"   >
                            <a class="nav-link" href="#">
                                    <i class="mdi mdi-face-agent me-2"></i> Agents
                            </a>
                            </li>
                            </Link>

                            <Link to={"/ads"} >
                            <li id="ads" class="nav-item nav-link unactive" >
                            <a class="nav-link" href="#">
                                    <i class="mdi mdi-ticket-confirmation me-2"></i> Ads
                            </a>
                            </li>
                            </Link>


                            <Link to={"/reported"} >
                            <li id="reported" class="nav-item nav-link unactive"  >
                            <a class="nav-link" href="#">

                                    <i class="mdi mdi-alert-octagon me-2"></i> Reported
                            </a>
                            </li>
                            </Link>

                            <Link to={"/accounting"} >
                            <li id="accounting" class="nav-item nav-link unactive"  >
                                <a class="nav-link" href="#">
                                    <i class="mdi mdi-cash me-2"></i> Accounting
                                </a>
                            </li>   
                            </Link>
                        </ul>
                    </div>
                            <Link to={"/signin"} >
                            <div class="site-footer px-5 py-2">
                                <i class="mdi mdi-logout-variant me-2"></i> Logout
                            </div>
                            </Link>
                </div>
            </nav>
    </div>
  )
}

export default Header