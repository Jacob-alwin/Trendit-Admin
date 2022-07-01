import React from 'react'
import { useEffect } from 'react'

function AdsUserInfo(props) {
   
        var data1 = JSON.parse(localStorage.getItem('userInfo'))
    
  return (
    <div class="row">
    <div class="col-xxl-7 col-xl-7 col-lg-6">
        <div class="card p-4 admin-card h-100">
            <div class="d-flex flex-column">
                <div class="d-flex align-items-center">
                    <div class="user-user-image me-2">
                        <img src="./img/avatar.jpg" class="fluid-img" />
                    </div>
                    <div class="user-user-name"><b>{props.p.name}</b></div>
                </div>
                <div class="mt-3"><span class="me-3"> <i class="mdi mdi-phone-outline"></i></span>+91 12345 67890</div>
                <div class="mt-2"><span class="me-3"><i class="mdi mdi-email-outline"></i></span>{props.p.email}</div>
            </div>
        </div>
    </div>
    <div class="col-xxl-5 col-xl-5 col-lg-6">
        <div class="card panel-card h-100">
            <div class="card-header">
                Actions
            </div>
            <div class="card-body pe-4 ps-4">
                <h4 class="medium-title">Block</h4>
                <label class="switch-wrap">
                    <input type="checkbox" />
                    <div class="switch"></div>
                  </label>
            </div>
        </div>

    </div>
</div>


  )
}

export default AdsUserInfo