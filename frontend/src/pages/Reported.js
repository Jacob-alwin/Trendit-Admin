import React,{useState,useEffect} from 'react'
import "../css/App.css";

import Headings from '../components/Headings'
import TableFooter from '../components/TableFooter';
import ReportUserHead from '../components/ReportUserHead';
import axios from 'axios';
import ReportedUserList from '../components/ReportedUserList';
import ReportedAdsHead from '../components/ReportedAdsHead';
import ReportedAdsList from '../components/ReportedAdsList';
import ReactPaginate from "react-paginate";


function Reported() {


    const [userChecked, setuserChecked] = useState(false)
    const [adsChecked, setadsChecked] = useState(false)
 
    const [report,setReport] = useState([])
    const [reportFilter,setReportFilter] = useState("")

    useEffect(()=>{
        async function fetchData() {



          
            if (reportFilter.length) {
                const data =  await axios.get('http://127.0.0.1:5000/api/users/admin/reported')
                  //Search Filtering
                const res =data.data
                const filter = res.filter((newVal) => {
                    //Search Filtering
                    return newVal.name.startsWith(reportFilter) 
                  });

                  setReport(filter);
            } else {

                const data =  await axios.get('http://127.0.0.1:5000/api/users/admin/reported')
                setReport(data.data)
                
            } 
           
            
             }
             fetchData();
            
    }, [reportFilter])



    const [pageNumber, setPageNumber] = useState(0);
    const resultPerPage = 5;
    const pagesVisited = pageNumber * resultPerPage;
    const displayResult = report
        .slice(pagesVisited, pagesVisited + resultPerPage)
        .map((report) => {
        return <ReportedUserList user={report}   allChecked={userChecked}/>;
        });

    const pageCount = Math.ceil(report.length / resultPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }; 
   



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
                            <div class="search-area d-flex p-4">
                                    <input class="form-control me-3" placeholder="Search Reported User" onChange={(e) => (setReportFilter(e.target.value))} />
                                    <button class="btn btn-primary">Search</button>
                                </div>
                                
                                <div class="table-responsive">
                               
                                    <table class="table">

                                  
                                         <ReportUserHead  setallChecked={userChecked => setuserChecked(userChecked)} />
                                        <tbody>
                                            {
                                                displayResult.length?displayResult:''
                                            }
                                            
                                          
                                           
                                            
                                        </tbody>
                                    </table>

                                    <div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                            <div>Total Results <span>{report.length}</span></div>
                                <div class="ms-auto d-flex">
                                    {/* <span class="pointer me-2"><i class="mdi mdi-chevron-left mdi-24px"></i></span>
                                    <span class="pointer"><i class="mdi mdi-chevron-right mdi-24px"></i></span> */}
                                    <ReactPaginate  
                                    previousLabel={<i className="mdi mdi-chevron-left mdi-16px"></i>}
                                    nextLabel={<i className="mdi mdi-chevron-right mdi-16px"></i>}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"pagination"} //UL
                                    pageClassName={"page-item"} //li
                                    previousLinkClassName={"page-link "} // <- a
                                    nextLinkClassName={"page-link"}// -> a
                                    pageLinkClassName={"page-link "} // a
                                    previousClassName={"page-item"}
                                    nextClassName={"page-item"}
                                    disabledClassName={"nextpreviousdis"}
                                    activeClassName={"page-item active"}
                                />
                            </div>
                        </div>
                                </div>
                            </div>
                            {/* <div class="tab-pane fade" id="pills-assigned" role="tabpanel" aria-labelledby="pills-assigned-tab">
                            <div class="search-area d-flex p-4">
                                    <input class="form-control me-3" placeholder="Search Reported User" onChange={handleChange} />
                                    <button class="btn btn-primary">Search</button>
                                </div>
                                
                                    <table class="table">
                                        
                           <ReportedAdsHead  setallChecked={adsChecked => setadsChecked(adsChecked)}/>
                            <tbody>
                                <ReportedAdsList   allChecked={adsChecked}/>
                           
                               
                            </tbody>
                        </table>
                       <TableFooter/>
                            </div> */}
                        </div>
                    </div>
                </div>    
          
  )
}

export default Reported