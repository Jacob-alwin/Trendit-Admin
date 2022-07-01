import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserList(props) {
  const navigate = useNavigate()
  let data11 = props.p;
  const [listSelected, setlistSelected] = useState(true)
  const [count,setCount] = useState('')
  const [products,setProducts] = useState([])
  var data1 = JSON.parse(localStorage.getItem('userInfo'))
  useEffect(() => {
    setlistSelected(props.allChecked)
    async function fetchData() {
      const config = {
          headers: {
            Authorization: `Bearer ${data1.token}`,
          },
        }
   console.log(props.p._id)
        const  data  = await axios.get(`/api/products/product/co/${props.p._id}`,config)
        setCount(data.data.length)
        setProducts(data.data)
        console.log(data.data.length)
         }
         fetchData();

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
    <td>91123456789</td>
    <td class="text-end">{count}</td>
    <td className={listSelected?"text-end edit-display":"text-end"}>
     <Link to='/userdetails' state={[products,data11]} className="link-divs">
      Edit
    </Link></td>
    <td className={listSelected?"text-end":"text-end delete-display"}><i class="mdi mdi-delete " onClick={()=>{
      axios.delete(`/api/users/user/${props.p._id}`).then(()=>{
        console.log("user deleted")
        navigate('/')
      })
    }}></i></td>
</tr>
  )
}

export default UserList