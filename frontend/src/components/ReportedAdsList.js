import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function ReportedAdsList(props) {


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
            <input class="form-check-input" type="checkbox"  checked={listSelected} id="check-2" onClick={(e)=>{checkBoxClicked(e)}}/>
            <label class="form-check-label2" for="check-2">
            </label>
        </div>
    </td>
    <td>Orange Sofa - Good Condition</td>
    <td>5656</td>
    <td>1min</td>
    <td>
        <span class="badge bg-warning">Pending</span>
        {/* <span class="badge bg-success">Cleared</span>
        <span class="badge bg-danger">Pending</span> */}
    </td>
    <td className={listSelected?"text-end edit-display":"text-end"}> <Link to={'/userdetails'} className="link-divs">
      Edit
</Link></td>
    <td className={listSelected?"text-end":"text-end delete-display"}><i class="mdi mdi-delete "></i></td>
   
    
  

</tr>

  )
}

export default ReportedAdsList