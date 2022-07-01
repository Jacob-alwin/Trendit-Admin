import React,{useState,useEffect} from 'react'
import "../css/App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Headings from '../components/Headings'



function CreateAgent() {
    const navigate = useNavigate();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phonenumber,setPhoneNumber] = useState('')
    const [address,setAddress] = useState('')

    const CreateAgent = async(e) => {
        e.preventDefault()
        let data
        try{
         data =  await axios.post('http://127.0.0.1:5000/api/users/CreateNewAgent',{
             name,email,password,phonenumber,address
         })}
         catch(err){
          console.log(err.response.data)
         }
         if(data){
            navigate('/agent')
         }
        
    }

      var head = "Create Agent"

  return (
            <div class="main-content py-3">
            <Headings heading={head}/>


                 <div class="row">
                        <div class="col-lg-12 col-xl-7 col-xxl-8">
                        <div class="row mb-3">
                            <div class="col-12">
                                    <div class="card panel-card">
                                        <div class="card-header">
                                        </div>

                                        
                                        <form  id="createagentform" onSubmit={CreateAgent}>
                                        <div class="card-body p-0 ">
                                            <div class="d-flex py-2 ps-4 pe-4  col-9">
                                                <div class="me-3 col-5"><i class="mdi mdi-account mdi-24px"></i> Agent Name : </div>
                                                <input type="text" id="agentname" name="agentname" value={name}
                                                 onChange={(e) => setName(e.target.value)}/>
                                            </div>
                                            <hr class="my-1" />

                                            <div class="d-flex py-2 ps-4 pe-4  col-9">
                                                <div class="me-3  col-5"><i class="mdi mdi-lock mdi-24px"></i> Password : </div>
                                                <input type="text" id="pwd" name="pwd" value={password}
                                                onChange={(e) => setPassword(e.target.value)}/>
                                            </div>
                                            {/* <hr class="my-1" />
                                            
                                            
                                              <div class="d-flex py-2 ps-4 pe-4 align-items-center  col-9">
                                                <div class="me-3 col-5"><i class="mdi mdi-access-point mdi-24px"></i> Agent ID : </div>
                                                <input type="number" id="agentid" name="agentid" />
                                            </div> */}
                                            <hr class="my-1" />
                                            <div class="d-flex py-2 ps-4 pe-4 align-items-center  col-9">
                                                <div class="me-3 col-5"><i class="mdi mdi-phone-outline mdi-24px"></i> Phone Number : </div>
                                                <input type="Number" id="number" name="number" value={phonenumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}/>
                                            </div>
                                            <hr class="my-1" />
                                            <div class="d-flex py-2 ps-4 pe-4 align-items-center  col-9">
                                                <div class="me-3 col-5"><i class="mdi mdi-email-outline mdi-24px"></i> Email ID : </div>
                                                <input type="email" id="email" name="email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} />

                                            </div>
                                            <hr class="my-1" />
                                            <div class="d-flex py-2 ps-4 pe-4 align-items-start  col-9">
                                                <div class="me-3 col-5"><i class="mdi mdi-home-outline mdi-24px"></i> Address : </div>
                                         
                                                <textarea name="address" cols="40" rows="5" value={address}
                                                 onChange={(e) => setAddress(e.target.value)}></textarea>


                                            </div>
                                            <hr class="my-1" />

                                            <div class="d-flex py-2 ps-4 pe-4 align-items-center  col-9">
                                            <button class="btn btn-primary">
                                                  <i class="mdi mdi-plus me-2"  form="createagentform"  ></i>Create Agent</button>
                                            </div>

                              
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>  

                      
                </div>   
            </div>    
      
  )
}

export default CreateAgent