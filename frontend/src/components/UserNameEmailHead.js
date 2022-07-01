import React from 'react'

function UserNameEmailHead(props) {

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
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th class="text-end">No of Ads</th>
        <th class="text-end">Actions</th>
    </tr>
</thead>
  )
}

export default UserNameEmailHead