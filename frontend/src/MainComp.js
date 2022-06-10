import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import { useNavigate,useLocation } from 'react-router-dom';
import Accounting from './pages/Accounting';
import Ads from './pages/Ads';
import UserDetails from './pages/UserDetails';
import Advertiment from './pages/Advertiment';
import Agent from './pages/Agent';
import Reported from './pages/Reported';
import Users from './pages/Users';
import AgentDetails from './pages/AgentDetails';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import CreateAgent from './pages/CreateAgent';
import UserReported from './pages/UserReported';





function MainComp() {
  const navigate = useNavigate();
  const location = useLocation();
  // const [head, setHead] = useState('Accounting')

  const pathname = window.location.href
  console.log(pathname);
  var data = ''
  data = JSON.parse(localStorage.getItem('userInfo'))
  console.log(data)
  return (

    <div>
    {data != null?
    <div className='container-fluid'>  
    <div className='row'>
        <Header/>
        
        <main class="col-md-8 col-lg-9 col-xl-9 col-xxl-9 ms-sm-auto px-md-4 py-sm-2 py-md-0">
        <HeaderMobile/>
    
    
              <Routes>
                <Route exact path='/' element ={<Users/>}/>
                <Route exact path='/agent' element ={<Agent/>}/>
                <Route exact path='/userreported' element ={<UserReported/>}/>

                <Route exact path='/agentdetails' element ={<AgentDetails/>}/>
                <Route exact path='/agentcreate' element ={<CreateAgent/>}/>
                <Route exact path='/ads' element ={<Ads/>}/>
                <Route exact path='/reported' element ={<Reported/>}/>
                <Route exact path='/accounting' element ={<Accounting/>}/>
                <Route exact path='/ad' element ={<Advertiment/>}/>
                <Route exact path='/userdetails' element ={<UserDetails/>}/>
            
              </Routes>
              </main>
              </div>
              </div>
     :<Navigate to="/signin" replace state={{ from: location }} />
    }
  </div>          
       
  );
}

export default MainComp
