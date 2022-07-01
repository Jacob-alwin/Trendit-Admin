import React from 'react'

function AdDescription(props) {
  return (
    <div class="row mb-3">
                                <div class="col-12">
                                    <div class="card panel-card">
                                        <div class="card-header">
                                            Description
                                        </div>
                                        <div class="card-body pe-4 ps-4">
                                            <ul class="p-0 d-flex flex-column product-description-lists">
                                                <li>{props.product.description} </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
  )
}

export default AdDescription