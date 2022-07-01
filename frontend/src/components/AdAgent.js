import React,{useState,useEffect}  from 'react'
import axios from 'axios';

import AdAgents from './AdAgents'
import SearchBar from './SearchBar'

function AdAgent(props) {





  var data1 = JSON.parse(localStorage.getItem('userInfo'))
  
  const [agentName, setagentName] = useState("")
  const [agentnamelist, setagentNamelist] = useState([])
  const [agentnameId, setagentNameId] = useState([])
  const [nameIdList, setnameIdList] = useState([])

  let agent=[];
  let ids=[];
  let nameIdObjectList=[];

       
  useEffect(() => {
    async function fetch(){
      const  data  = await axios.get(`/api/users/agentname/${props.product.agentName}`)
      console.log(data)
      console.log(data.data[0].name)
      if(data.data[0].name){
        setagentName(data.data[0].name)
       }  
    }
    fetch()
    console.log(props.product.agentName,"hiii")
  //  if(props.product.agentName){
  //   setagentName(props.product.agentName)
  //  }   
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
            agent.push(profile.name);
            ids.push(profile._id)
            let nameIdObject = {name:profile.name, id:profile._id}
            nameIdObjectList.push(nameIdObject);
          });
          console.log(agent);
          console.log(ids);
          console.log(nameIdObjectList);
          setagentNamelist(agent);
          setagentNameId(ids);
          setnameIdList(nameIdObjectList);
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
                agentName.length?'':<SearchBar iD={props.product._id} setagentName={(agentName) => setagentName(agentName)} Ads={props.product._id} products={agentnamelist} agentIds= {agentnameId} nameId={nameIdList} />
              }
               
                <div class="search-area d-flex me-5 p-4">
                    <input class="form-control me-3" placeholder="Assign Agent" />
                    <button class="btn btn-primary">{agentName}</button>
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