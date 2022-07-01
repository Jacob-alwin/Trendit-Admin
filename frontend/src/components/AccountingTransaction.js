import React from 'react'

function AccountingTransaction() {
  return (
    <div class="row">
                        <div class="col-lg-12 col-xl-8 col-xxl-6">
                            <div class="card panel-card">
                                <div class="card-header">
                                    Download transactions during
                                </div>
                                <div class="card-body pe-4 ps-4">
                                    <div class="d-flex flex-column">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                          Today
                                        </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                          Last Month
                                        </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                            <label class="form-check-label" for="flexRadioDefault3">
                                          Last 6 Months
                                        </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                                            <label class="form-check-label" for="flexRadioDefault4">
                                          Duration
                                        </label>
                                        </div>
                                        <div class="d-flex ms-4 py-2 label-small">
                                            <div class="me-2">
                                                <label>Start Date</label>
                                                <input type="date" id="startdate" name="date" placeholder="Start Date" class="form-control"/>
                                            </div>
                                            <div>
                                                <label>End Date</label>
                                                <input type="date" id="enddate" name="date" placeholder="End Date" class="form-control"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="card-footer text-muted">
                                    <button class="btn btn-primary">Download</button>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default AccountingTransaction