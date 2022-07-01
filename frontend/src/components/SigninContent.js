import React,{useState,useEffect} from 'react'
import { Link,Navigate,useLocation ,useNavigate } from "react-router-dom";
import axios from 'axios';


function SigninContent() {
    const navigate = useNavigate();
  const location = useLocation();
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const submitHandler = async(e) => {
    e.preventDefault()
    console.log("dat")
    
    const { data } = await axios.post(
        '/api/users/login',
        { email, password },
      )
      console.log(data)
      if(data != null){
          console.log("hii")
      if(data.isAdmin === true){
      localStorage.setItem('userInfo', JSON.stringify(data)); 
      navigate('/')
      }else{
          console.log("You are not Authorized")
      }
      }
    
  }
  return (
  
    <form class="login100-form validate-form" onSubmit={submitHandler}>
    

        <span class="login100-form-title p-b-26">
            Sign In

            
        </span>
        <span class="login100-form-title p-b-48">
            <i class="zmdi zmdi-font"></i>
        </span>

        <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
            <input class="input100" type="text" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <span class="focus-input100" data-placeholder="Email"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Enter password">
            <span class="btn-show-pass">
                <i class="zmdi zmdi-eye"></i>
            </span>
            <input class="input100" type="password" name="pass" value={password}
            onChange={(e) => setpassword(e.target.value)}/>
            <span class="focus-input100" data-placeholder="Password"></span>
        </div>

        <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button class="login100-form-btn">
                    Login
                </button>
            </div>
        </div>

        <div class="text-center p-t-115">
            

             <Link to={"signinforgotpass"}  className="link-divs">

            <a class="txt2" href="#">
                Forgot Password ?
            </a>
            </Link>
        </div>
    </form>


  )
}

export default SigninContent