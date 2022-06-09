import React from 'react'

function AdReportedList() {
  return (
    <div class="card-body pe-4 ps-4 ">
                <div class="d-flex align-items-center">
                    <div class="user-user-image me-2">
                        <img src="./img/avatar.jpg" class="fluid-img" />
                    </div>
                    <div class="user-user-name d-flex flex-column"><b>Pramod T V</b>
                    </div>
                </div>
                <div class="my-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div class="d-flex">
                    <div class="form-check mb-2 me-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Pending
                    </label>
                    </div>
                    <div class="form-check mb-2 me-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label class="form-check-label" for="flexRadioDefault3">
                            Cleared
                    </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                        <label class="form-check-label" for="flexRadioDefault4">
                            Remove Ad
                    </label>
                    </div>
                </div>
            </div>

  )
}

export default AdReportedList