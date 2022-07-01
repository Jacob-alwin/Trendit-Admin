import React from 'react'

function AgentAnalytics(props) {
  return (
    <div class="row">
        <div class="col-6">
            <div class="card admin-card p-3 mb-3">
                <div class="analytic-icon d-flex justify-content-end text-blue">
                    <i class="mdi mdi-access-point-network mdi-24px"></i>
                </div>
                <div class="analytic-info">
                    <div class="content-title">{props.profile.pending}</div>
                    <div class="small-title text-gray">Active</div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card admin-card p-3 mb-3">
                <div class="analytic-icon d-flex justify-content-end text-green">
                    <i class="mdi mdi-check-circle-outline mdi-24px"></i>
                </div>
                <div class="analytic-info">
                    <div class="content-title">{props.profile.completed}</div>
                    <div class="small-title text-gray">Completed</div>
                </div>
            </div>
        </div>
        {/* <div class="col-12">
            <div class="card admin-card p-3 mb-3">
                <div class="analytic-icon d-flex justify-content-end text-yellow">
                    <i class="mdi mdi-star mdi-24px"></i>
                </div>
                <div class="analytic-info">
                    <div class="content-title">88%</div>
                    <div class="small-title text-gray">Clearance rate</div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default AgentAnalytics