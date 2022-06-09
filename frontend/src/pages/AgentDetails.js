import React,{useEffect,useState} from 'react'
import "../css/App.css";

import Headings from '../components/Headings'
import axios from 'axios';
import AgentProfile from '../components/AgentProfile';
import AgentInfo from '../components/AgentInfo';
import AgentAnalytics from '../components/AgentAnalytics';
import AgentAssignments from '../components/AgentAssignments';
import {useLocation} from 'react-router-dom'

function AgentDetails() {
      var head = "Agent Details"
      const location = useLocation();
      const [agent,setAgents] = useState('')
      var data1 = JSON.parse(localStorage.getItem('userInfo'))
   let data;
  useEffect(()=>{
    data = location.state;
    console.log(data)
    async function fetchData() {
        console.log("hii")
        const config = {
            headers: {
              Authorization: `Bearer ${data1.token}`,
            },
          }
     
          const  data  = await axios.get(`/api/agent/AgentprofileforAdmin/627fd251df2c4a7cd301ba27`,config)
          setAgents(data.data)
          console.log(data+"1")
           }
           fetchData();
  },[data])

  return (
            <div class="main-content py-3">
            <Headings heading={head}/>


                 <div class="row">
                        <div class="col-lg-12 col-xl-7 col-xxl-8">

                            <AgentProfile  profile={agent}/>
                            <AgentInfo profile={agent}/>
                        </div>  

                        <div class="col-lg-12 col-xl-5 col-xxl-4">
                         <h4 class="page-sub-title mb-3">Analytics</h4>
                         <AgentAnalytics profile={agent}/>

                         <div class="row mt-4">
                                <div class="col-12">
                                    <h4 class="regular-title text-gray"> Joined</h4>
                                    <div class="card admin-card p-3 ">
                                        <div class="d-flex align-items-center">
                                            <div class="me-3"><i class="mdi mdi-calendar-blank mdi-24px"></i></div>
                                            <div>12 Aug 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>   
                <AgentAssignments profile={agent.name}/>
            </div>    
      
  )
}

export default AgentDetails