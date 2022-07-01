import React from 'react'
import { Link } from "react-router-dom";

function SiginNewPass() {
  return (
  
    <form class="login100-form validate-form">
    

        <span class="login100-form-title p-b-26">
            New Password
        </span>
        <span class="login100-form-title p-b-2">
   
            <i class="zmdi zmdi-font">  Enter Pin Code that sent it to your Email  </i>
          
        </span>

        <div class="wrap-input100 validate-input mt-4" data-validate="Enter Password">
            <span class="btn-show-pass">
                <i class="zmdi zmdi-eye"></i>
            </span>
            <input class="input100" type="password" name="pass"/>
            <span class="focus-input100" data-placeholder="Enter new password"></span>
        </div>

        <div class="wrap-input100 validate-input mt-4" data-validate="Enter Password">
            <span class="btn-show-pass">
                <i class="zmdi zmdi-eye"></i>
            </span>
            <input class="input100" type="password" name="pass"/>
            <span class="focus-input100" data-placeholder="Confrim Password"></span>
        </div>

        

        <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button class="login100-form-btn">
                    Confirm
                </button>
            </div>
        </div>

        <div class="text-center p-t-115">
            

        <Link to={"/signin"}  className="link-divs">

            <a class="txt2" href="#">
                Go Back to Sign In
            </a>
        </Link>
        </div>
    </form>


  )
}

export default SiginNewPass