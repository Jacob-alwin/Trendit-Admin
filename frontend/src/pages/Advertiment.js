import React from 'react'
import "../css/App.css";
import {useLocation} from 'react-router-dom'
import Headings from '../components/Headings'
import AdCarousel from '../components/AdCarousel';
import AdDetails from '../components/AdDetails';
import AdDescription from '../components/AdDescription';
import AdAgent from '../components/AdAgent';
import AdComments from '../components/AdComments';
import AdReported from '../components/AdReported';
import AdSeller from '../components/AdSeller';
import AdAppointment from '../components/AdAppointment';

function Advertisement() {
  let data;

    const location = useLocation();
   
    data = location.state;
    console.log(data)
  var head = "Advertisement"

  return (
  
                <div class="main-content py-3">
                  <Headings heading={head}/>
                    <div class="row">
                        <div class="col-lg-12 col-xl-7 col-xxl-8">
                                <AdCarousel product={data}/>
                                <AdDetails product={data}/>
                                <AdDescription product={data}/>
                                <AdAgent product={data}/>
                                <AdComments product={data}/>
                                <AdAppointment product={data}/>
                                {/* <AdReported/> */}

                        </div>
                      <AdSeller product={data}/>

                    </div>

                   
                </div>    
          
  )
}

export default Advertisement