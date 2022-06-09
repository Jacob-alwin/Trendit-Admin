import React from 'react'

function TableFooter() {
  return (
<div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                                <div>Showing <span>1</span> of <span>10</span></div>
                                <div class="ms-auto d-flex">
                                    <span class="pointer me-2"><i class="mdi mdi-chevron-left mdi-24px"></i></span>
                                    <span class="pointer"><i class="mdi mdi-chevron-right mdi-24px"></i></span>
                                </div>
                            </div>

  )
}

export default TableFooter