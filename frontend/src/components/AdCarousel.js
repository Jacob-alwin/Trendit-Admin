import React from 'react'



function AdCarousel(props) {
  
    console.log(props.product.image)
  return (
        <div class="row mb-3">
        <div class="col-12">
            <div class="card admin-card bg-dark  p-3">
                <div id="product-slider" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active text-center">
                        <img  alt="..." height={400}></img>
                        </div>
                        <div class="carousel-item text-center">
                        <img  alt="..." height={400}></img>
                        </div>
                        <div class="carousel-item text-center">
                        <img  alt="..." height={400}></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#product-slider" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#product-slider" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdCarousel