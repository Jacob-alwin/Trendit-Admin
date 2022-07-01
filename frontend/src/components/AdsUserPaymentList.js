import React,{useState,useEffect} from 'react'


function AdsUserPaymentList(props) {



  const [listSelected, setlistSelected] = useState(true)
  useEffect(() => {
    setlistSelected(props.allChecked)
  }, [props.allChecked])


  const checkBoxClicked=(e)=>{
    if(props.allChecked){
      if(e.target.checked){
        setlistSelected(false)
      }
      else{
        setlistSelected(true)
      }
    }
    else{
      if(e.target.checked){
        setlistSelected(true)
      }
      else{
        setlistSelected(false)
      }
    }
    
  }


  return (
    <tr>
    <td>
        <div class="form-check mb-0 d-flex justify-content-center">
            <input class="form-check-input" type="checkbox" value="" id="check-2"    checked={listSelected} onClick={(e)=>{checkBoxClicked(e)}}/>
            <label class="form-check-label2" for="check-2">
                    </label>
        </div>
    </td>
    <td>Nike Airforce 1 Shadow - 1 month old</td>
    <td>₹49</td>
    <td>23423</td>
    <td>15 Jun</td>
    <td className={listSelected?"text-end edit-display":"text-end"}>Edit</td>
    <td className={listSelected?"text-end":"text-end delete-display"}><i class="mdi mdi-delete "></i></td>
</tr>
  )
}

export default AdsUserPaymentList