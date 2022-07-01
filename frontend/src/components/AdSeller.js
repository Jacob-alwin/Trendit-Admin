import React,{useState,useEffect} from 'react'
import axios from 'axios'
function AdSeller(props) {
    const data1 = JSON.parse(localStorage.getItem('userInfo')) 
    const [user,setUser] = useState('')
    useEffect(()=>{
        async function fetchData() {
      
            const config = {
                headers: {
                  Authorization: `Bearer ${data1.token}`,
                },
              } 
         
         const  data9  = await axios.get(`/api/users/${props.product.userid}`,config)
             
              setUser(data9.data)
             
               }
               fetchData();    
      
      
    },[data1])
  return (
    <div class="col-lg-12 col-xl-5 col-xxl-4">
                                <div class="card panel-card">
                                    <div class="card-header">
                                        Seller
                                    </div>
                                    <div class="card-body pe-4 ps-4">
                                        <div class="d-flex flex-column">
                                            <div class="d-flex align-items-center">
                                                <div class="user-user-image me-2">
                                                    <img src={user.image} class="fluid-img" />
                                                </div>
                                                <div class="user-user-name d-flex flex-column"><b>{user.name}</b>
                                                    <span class="small-text text-gray">Since Aug 2021</span></div>
                                            </div>
                                            <div class="mt-3"><span class="me-3"> <i class="mdi mdi-phone-outline"></i></span>+91{user.phone}</div>
                                            <div class="mt-3 mb-3"><span class="me-3"><i class="mdi mdi-email-outline"></i></span>{user.email}</div>
                                        </div>
                                    </div>
                                </div>
                        </div>


  )
}

export default AdSeller