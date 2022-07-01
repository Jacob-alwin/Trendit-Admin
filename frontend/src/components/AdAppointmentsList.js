import React from 'react'

function AdAppointmentsList({appointment}) {
    console.log(appointment)
  return (
 <div>
   <li class="mb-3">
    <div class="d-flex flex-column">
        <div class="regular-title">Date & Time</div>
        <div class="my-2">
            {appointment.date}, {appointment.time}</div>
    </div>
</li>
<li class="mb-3">
    <div class="d-flex flex-column">
        <div class="regular-title">Address</div>
        <div class="my-2">
            {appointment.address}</div>
    </div>
</li>
<li class="mb-3">
    <div class="d-flex flex-column">
        <div class="regular-title">Notes</div>
        <div class="my-2">
            {appointment.notes}</div>
    </div>
</li>

 </div>
  )
}

export default AdAppointmentsList