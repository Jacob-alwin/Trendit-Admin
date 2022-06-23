import React,{useState,useEffect}  from 'react'
import axios from 'axios';

import AdAgents from './AdAgents'
import SearchBar from './SearchBar'

function AdAgent(props) {





  var data1 = JSON.parse(localStorage.getItem('userInfo'))
  
  const [agentName, setagentName] = useState("")
  const [agentnamelist, setagentNamelist] = useState([])

  let agent=[]

       
  useEffect(() => {
        
    async function fetchData() {
        console.log("hii")
        const config = {
            headers: {
              Authorization: `Bearer ${data1.token}`,
            },
          }
          const  data  = await axios.get('/api/agent/AllAgentprofile',config)
          const res = data.data;
          res.map((profile) => {
            agent.push(profile.name)
          });
          setagentNamelist(agent)
           }
           fetchData();
          
  }, [])
  
 


  console.log(props.product.agentName)
  return (
     
    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Agent
            </div>
            <div class="card-body pe-4 ps-4">
              {
                agentName.length?'':<SearchBar setagentName={(agentName) => setagentName(agentName)} products={agentnamelist}  />
              }
               
                <div class="search-area d-flex me-5 p-4">
                    
                    </div>
                <h4 class="regular-title my-3">Assigned</h4>
                <ul class="p-0 d-flex flex-column product-description-lists">
                <AdAgents agent={agentName}/>
                
             
                </ul>
              </div>
         </div>
    </div>
</div>



  )
}

export default AdAgent