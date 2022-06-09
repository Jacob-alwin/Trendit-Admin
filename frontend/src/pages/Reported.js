import React,{useState,useEffect} from 'react'
import "../css/App.css";

import Headings from '../components/Headings'
import SearchBar from '../components/SearchBar'
import TableFooter from '../components/TableFooter';
import ReportUserHead from '../components/ReportUserHead';
import axios from 'axios';
import ReportedUserList from '../components/ReportedUserList';
import ReportedAdsHead from '../components/ReportedAdsHead';
import ReportedAdsList from '../components/ReportedAdsList';

function Reported() {


    const [userChecked, setuserChecked] = useState(false)
    const [adsChecked, setadsChecked] = useState(false)
 
    const [report,setReport] = useState([])

    useEffect(()=>{
        async function fetchData() {
          
             
            const data =  await axios.get('http://127.0.0.1:5000/api/users/admin/reported')
            setReport(data.data)
            
             }
             fetchData();
            
    }, [])
   



  var head = "Reported"

  return (
    
                <div class="main-content py-3">
                <Headings heading={head}/>
                     <ul class="nav nav-pills custom-tabs mb-3 mt-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-new-tab" data-bs-toggle="pill" data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-new" aria-selected="true">Users</button>
                        </li>
                        {/* <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-assigned-tab" data-bs-toggle="pill" data-bs-target="#pills-assigned" type="button" role="tab" aria-controls="pills-assigned" aria-selected="false">Ads <span class="badge bg-danger">10</span></button>
                        </li> */}
                    </ul>
                    <div class="card admin-card">
                    <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab">
                                <SearchBar/>
                                <div class="table-responsive">
                               
                                    <table class="table">

                                  
                                         <ReportUserHead  setallChecked={userChecked => setuserChecked(userChecked)} />
                                        <tbody>
                                            {
                                                report.map((report) => {
                                                    return(<ReportedUserList user={report}   allChecked={userChecked}/>)
                                                })
                                            }
                                            
                                            {/* <ReportedUserList   allChecked={userChecked}/>
                                            <ReportedUserList   allChecked={userChecked}/>
                                            <ReportedUserList   allChecked={userChecked}/> */}
               
                                           
                                            
                                        </tbody>
                                    </table>

                                    <TableFooter/>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-assigned" role="tabpanel" aria-labelledby="pills-assigned-tab">
                                    <SearchBar/>
                                    <table class="table">
                                        
                           <ReportedAdsHead  setallChecked={adsChecked => setadsChecked(adsChecked)}/>
                            <tbody>
                                <ReportedAdsList   allChecked={adsChecked}/>
                           
                               
                            </tbody>
                        </table>
                       <TableFooter/>
                            </div>
                        </div>
                    </div>
                </div>    
          
  )
}

export default Reported