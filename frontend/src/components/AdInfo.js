import React from 'react'

function AdInfo() {
  return (
    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Info
            </div>
            <div class="card-body pe-4 ps-4">
                <ul class="p-0 d-flex flex-column product-description-lists">
                    <li><span class="me-2">ID:</span> <span>1234567890</span>
                    </li>
                    <li> <span class="me-2">Type:</span> <span>Buy</span></li>
                    <li><span class="me-2">Category:</span> <span>Furniture</span></li>
                    <li><span class="me-2">Sub Category:</span> <span>—</span></li>
                    <li><span class="me-2">Date:</span> <span>12 Aug 2021</span></li>
                    <li><span class="me-2">Featured:</span> <span>No</span></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdInfo