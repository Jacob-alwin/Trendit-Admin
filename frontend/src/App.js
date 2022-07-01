import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import MainComp from './MainComp';
import Signin from './pages/Signin';





function App() {
  // const [head, setHead] = useState('Accounting')

  const pathname = window.location.href
  console.log(pathname);
  
  return (
    
    <BrowserRouter>
    
   
              <Routes>
                <Route exact path='/*' element ={<MainComp/>}/>
                <Route exact path='/signin/*' element ={<Signin/>}/>
            
              </Routes>
            
    </BrowserRouter>  

  );
}

export default App
