import React from 'react'

function AgentProfile(props) {
  return (
    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Profile
            </div>
            <div class="card-body pe-4 ps-4">
                <div class="d-flex align-items-center">
                    <div class="user-user-image profile-image me-2">
                        <img src="./img/avatar.jpg" class="fluid-img"/>
                    </div>
                    <div class="user-user-name d-flex flex-column"><b>{props.profile.name}</b>
                        <span class="small-text">ID: <span>{props.profile._id}</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AgentProfile