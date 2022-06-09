import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function AgentList(props) {


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
    <td>{props.p.name}</td>
    <td>{props.p.email}</td>
    <td>{props.p._id}</td>
    <td class="text-end">{props.p.assigned.length}</td>
    <td className={listSelected?"text-end edit-display":"text-end"}>
     <Link to='/agentdetails' state={props.p._id} className="link-divs">
      Edit
    </Link></td>
    <td className={listSelected?"text-end":"text-end delete-display"}><i class="mdi mdi-delete "></i></td>
</tr>
  )
}

export default AgentList