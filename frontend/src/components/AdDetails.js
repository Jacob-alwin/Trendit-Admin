import React from 'react'

function AdDetails(props) {

  return (
    <div class="row mb-3">
    <div class="col-12">
        <div class="card admin-card mb-3">
            <div class="card-body d-flex">
                <div class="flex-grow-1 d-flex flex-column">
                    <div class="p-2 d-flex align-items-start">
                        <div class="d-flex flex-column">
                            <div class="item-price">₹{props.product.price}</div>
                            <div class="item-name text-gray">{props.product.name}
                            </div>
                        </div>
                        {/* <div class="ms-auto">
                            <div class="d-flex align-items-center">
                                <h4 class="medium-title me-2 mb-0">Verified</h4>
                                <label class="switch-wrap">
                                    <input type="checkbox" />
                                    <div class="switch"></div>
                                </label>
                            </div>
                        </div> */}
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 mt-1">
                        <div class="flex-grow-1 item-location d-flex align-items-center">
                            <span class="me-1 map-marker"> <i
                                    class="mdi mdi-24px mdi-map-marker"></i></span>
                            <span class="text-gray">{props.product.city}</span>
                        </div>
                        <div class="favorites">
                            <p class="m-0 text-gray small">12 Aug</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdDetails