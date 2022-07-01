import React from 'react'
import AdAppointmentsList from './AdAppointmentsList'

function AdAppointment(props) {
  return (
   
    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Appointment
            </div>
            <div class="card-body pe-4 ps-4 comments-contents-wrapper">
                <ul class="p-0 d-flex flex-column product-description-lists mb-0">
                <AdAppointmentsList appointment = {props.product}/>
        
                  
                </ul>
            </div>
          
        </div>
    </div>
    </div>

  )
}

export default AdAppointment