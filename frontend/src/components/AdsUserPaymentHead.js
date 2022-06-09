import React from 'react'

function AdsUserPaymentHead(props) {


  const allClicked = (e) =>{
    if(e.target.checked){
        props.setallChecked(true)

    }
    else{
      props.setallChecked(false)


    }
  }

  

  return (
    <thead>
    <tr>
        <th width="5%">
            <div class="form-check mb-0 d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" value="" id="check-1" onClick={(e)=>{allClicked(e)}}/>
                <label class="form-check-label" for="check-1">
                        </label>
            </div>
        </th>
        <th>Title</th>
        <th>Amount</th>
        <th>Payment ID</th>
        <th>Date</th>
        <th class="text-end">Actions</th>
    </tr>
</thead>
  )
}

export default AdsUserPaymentHead