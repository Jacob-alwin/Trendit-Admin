import React from 'react'
import AdReportedList from './AdReportedList'

function AdReported() {
  return (
 
    
    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Reported
            </div>
            
            <AdReportedList/>
            <AdReportedList/>
            <AdReportedList/>
            <AdReportedList/>
            <AdReportedList/>
            
        </div>
    </div>
    </div>

  )
}

export default AdReported