import React from 'react'

function HeaderMobile() {
  return (
    <div class="mobile-header">
    <button class="navbar-toggler position-absolute d-md-none collapsed me-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon">
    <i class="mdi mdi-menu mdi-36px"></i>
</span>
</button>
    <div class="mobile-logo d-sm-block d-md-none">
        <img src="./img/trntit.png" class="fluid-img" />
    </div>
</div>
  )
}

export default HeaderMobile