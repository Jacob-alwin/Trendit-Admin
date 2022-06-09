import React from 'react'

function ReportUserHead(props) {

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
                <input class="form-check-input" type="checkbox" onClick={(e)=>{allClicked(e)}}/>
                <label class="form-check-label" for="check-1">
                </label>
            </div>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Status</th>
        <th class="text-end">Action</th>
    </tr>
</thead>
  )
}

export default ReportUserHead