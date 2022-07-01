import React from 'react'
import "../css/App.css";



import Headings from '../components/Headings'

import AdsUserInfo from '../components/AdsUserInfo';
import UserReportedList from '../components/UserReportedList';

function UserReported() {
  var head = "User Details"

  return (
   
                <div class="main-content py-3">
                <Headings heading={head}/>


                    <AdsUserInfo/>
                    <div class="col-lg-12 mt-5 col-xl-7 col-xxl-8">  
                    <div class="row mb-3">
                    <div class="col-12">
                        <div class="card panel-card">
                            <div class="card-header">
                                Reported
                            </div>
                                                
                            <UserReportedList/>
                            <UserReportedList/>
                            <UserReportedList/>
                            <UserReportedList/>
                            <UserReportedList/>
                            
                        </div>
                    </div>
    </div>
                        </div>

                   


                </div>    
          
  )
}

export default UserReported