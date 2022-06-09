import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function AdList(props) {

  const [listSelected, setlistSelected] = useState(true)
  const [product,setProduct] = useState('')
  useEffect(() => {
    console.log(props)
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
    <td>{props.title}</td>
    <td>{props.id}</td>
    <td>1min</td>
    <td className={listSelected?"text-end edit-display":"text-end"}> <Link to={'/ad'} state={props.product} className="link-divs">
      Edit
    </Link></td>
    <td className={listSelected?"text-end":"text-end delete-display"}><i class="mdi mdi-delete "></i></td>
   

</tr>

  )
}

export default AdList