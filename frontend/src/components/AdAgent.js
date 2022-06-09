import React from 'react'
import AdAgents from './AdAgents'
import SearchBar from './SearchBar'

function AdAgent(props) {
  console.log(props.product.agentName)
  return (
     
    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Agent
            </div>
            <div class="card-body pe-4 ps-4">
                {/* <SearchBar/> */}
                <h4 class="regular-title my-3">Assigned</h4>
                <ul class="p-0 d-flex flex-column product-description-lists">
                <AdAgents agent={props.product.agentName}/>
                
             
                </ul>
              </div>
         </div>
    </div>
</div>



  )
}

export default AdAgent