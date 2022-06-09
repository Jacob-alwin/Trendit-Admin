import React,{useState} from 'react'
import "../css/App.css";
import axios from 'axios';
import Headings from '../components/Headings'
import { useParams } from "react-router-dom";
import AdsUserAds from '../components/AdsUserAds';
import AdsUserPayment from '../components/AdsUserPayment';
import AdsUserInfo from '../components/AdsUserInfo';
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom'


function UserDetails() {
  let data;

    const location = useLocation();
   
    data = location.state;
    console.log(data[0])
  
  
  var head = "User Details"

 


  return (
   
                <div class="main-content py-3">
                <Headings heading={head}/>


                    <AdsUserInfo p={data[1]}/>

                    <AdsUserAds p={data[0]} p1={data[1]}/>

                    <AdsUserPayment p={data[1]}/>


                </div>    
          
  )
}

export default UserDetails