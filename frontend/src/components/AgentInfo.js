import React from 'react'

function AgentInfo(props) {
  return (
    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Contact
            </div>
            <div class="card-body p-0">
                <div class="d-flex py-2 ps-4 pe-4 align-items-center">
                    <div class="me-3"><i class="mdi mdi-phone-outline mdi-24px"></i></div>
                    <div>+91 {props.profile.phonenumber}</div>
                </div>
                <hr class="my-1" />
                <div class="d-flex py-2 ps-4 pe-4 align-items-center">
                    <div class="me-3"><i class="mdi mdi-email-outline mdi-24px"></i></div>
                    <div>{props.profile.email   }</div>
                </div>
                <hr class="my-1" />
                <div class="d-flex py-2 ps-4 pe-4 align-items-start ">
                    <div class="me-3"><i class="mdi mdi-home-outline mdi-24px"></i></div>
                    <ul class="p-0 d-flex flex-column product-description-lists mb-0">
                        <li>
                            {props.profile.address}
                        </li>
                        <li>1st Block 1st Cross</li>
                        <li>Rammurthy nagar</li>
                        <li>Bangalore</li>
                        <li>560016</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AgentInfo