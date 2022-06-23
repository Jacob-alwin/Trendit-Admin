import React from 'react'

function AdAgents(props) {
  return (
    <li class="mb-3">
    <div class="d-flex align-items-center">
        <div class="user-user-image me-2">
            <img src="./img/avatar.jpg" class="fluid-img" />
        </div>
        <div class="user-user-name d-flex flex-column"><b>{props.agent}</b>
        </div>
        <div class="ms-2"> <i class="mdi mdi-delete mdi-24px pointer"></i></div>
    </div>
</li>
  )
}

export default AdAgents