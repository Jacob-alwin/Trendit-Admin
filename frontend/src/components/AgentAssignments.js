import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AdList from './AdList'
import AdsHead from './AdsHead'
import ReactPaginate from "react-paginate"
import { format } from 'timeago.js'

function AgentAssignments({profile}) {

   console.log(profile)
    const [newallChecked, setnewallChecked] = useState(false)
    const [assignedallChecked, setassignedallChecked] = useState(false)
    const [pendingallChecked, setpendingallChecked] = useState(false)
    const data1 = JSON.parse(localStorage.getItem('userInfo')) 
    const [approved,setApproved] = useState([])
    const [pending,setPending] = useState([])
    const [assigned,setAssigned] = useState([])
     
    const [approvedFilter,setapprovedFilter] = useState('')
    const [pendingFilter,setpendingFilter] = useState('')
    const [assignedFilter,setassignedFilter] = useState('')

    useEffect(()=>{
        async function fetchData() {
      
            const config = {
                headers: {
                  Authorization: `Bearer ${data1.token}`,
                },
              } 

              if(approvedFilter.length) {
                const  data2  = await axios.get(`/api/users/approve/${profile}`)
                console.log(data2.data)             
                const res = data2.data
                const filter = res.filter((newVal) => {
                    return newVal.name.startsWith(approvedFilter)  });
              setApproved(filter)      

              } else {
                const  data2  = await axios.get(`/api/users/approve/${profile}`)   
                console.log(data2.data,"approved") 
                setApproved(data2.data)         
              }
   

              if (pendingFilter.length) {
                const  data3  = await axios.get(`/api/users/pending/${profile}`)
                console.log(data3.data,"pending") 

                const res1 = data3.data
                const filter1 = res1.filter((newVal) => {
                    return newVal.name.startsWith(pendingFilter) });
                setPending(filter1)         
                
              } else {

                const  data3  = await axios.get(`/api/users/pending/${profile}`)
                console.log(data3.data,"pending") 

              setPending(data3.data)     
              }
              
              
              
              if (assignedFilter.length) {
                const data4 = await axios.get(`http://127.0.0.1:5000/api/users/assigned/${profile}`)
                console.log(data4.data,"assigned")
                const res = data4.data  
                const filter1 =res.filter((newVal) => {
                    return newVal.name.startsWith(assignedFilter) });
                setAssigned(filter1)         
                
              } 
              else {
                const data4 = await axios.get(`http://127.0.0.1:5000/api/users/assigned/${profile}`)
                console.log(data4.data,"assigned")
                setAssigned(data4.data) 
              }





    
            }
            fetchData()
    },[assignedFilter,approvedFilter,pendingFilter])
    ///approved
  
   

            
            const [pageNumber3, setPageNumber3] = useState(0);
            const resultPerPage3 = 5;
            const pagesVisited3 = pageNumber3 * resultPerPage3;
            const displayResult3 = assigned
                .slice(pagesVisited3, pagesVisited3 + resultPerPage3)
                .map((assign) => {
                return <AdList title={assign.name} id={assign._id}  date={format(assign.createdAt)} product={assign} allChecked={newallChecked}/>;
                });
            const pageCount3 = Math.ceil(assigned.length / resultPerPage3);
            const changePage3 = ({ selected }) => {
                setPageNumber3(selected);
            };

        
            const [pageNumber2, setPageNumber2] = useState(0);
            const resultPerPage2 = 5;
            const pagesVisited2 = pageNumber2 * resultPerPage2;
            const displayResult2 = pending
                .slice(pagesVisited2, pagesVisited2 + resultPerPage2)
                .map((product) => {
                return <AdList title={product.name} id={product._id}  date={format(product.createdAt)} product={product} allChecked={newallChecked}/>;
                });

            const pageCount2 = Math.ceil(pending.length / resultPerPage2);

            const changePage2 = ({ selected }) => {
                setPageNumber2(selected);
            };





            const [pageNumber, setPageNumber] = useState(0);
            const resultPerPage = 5;
            const pagesVisited = pageNumber * resultPerPage;
            const displayResult = approved
                .slice(pagesVisited, pagesVisited + resultPerPage)
                .map((product) => {
                return <AdList title={product.name} id={product._id}  date={format(product.createdAt)} product={product} allChecked={newallChecked}/>;
                });
            const pageCount = Math.ceil(approved.length / resultPerPage);

            const changePage = ({ selected }) => {
                setPageNumber(selected);
            };
            

    


  return (
 <div class="row">
    <div class="col-12">
        <h4 class="page-sub-title my-4">Assignments</h4>
        <ul class="nav nav-pills custom-tabs mb-3 mt-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-new-tab" data-bs-toggle="pill" data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-new" aria-selected="true">Approved</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-assigned-tab" data-bs-toggle="pill" data-bs-target="#pills-assigned" type="button" role="tab" aria-controls="pills-assigned" aria-selected="false">Assigned</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-pending-tab" data-bs-toggle="pill" data-bs-target="#pills-pending" type="button" role="tab" aria-controls="pills-pending" aria-selected="false">Pending</button>
            </li>
        </ul>

        <div class="card admin-card">
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab">
                    <div class="search-area d-flex p-4">
                        <input class="form-control me-3" placeholder="Search user" onChange={(e) => (setassignedFilter(e.target.value))} />
                        <button class="btn btn-primary">Search</button>
                    </div>
                                
                    <div class="table-responsive">
                        <table class="table">
                           <AdsHead setallChecked={newallChecked => setnewallChecked(newallChecked)} />
                            <tbody>

                                {
                                displayResult3.length?displayResult3:''
                                
                                }
                                
                              {/* <AdList allChecked={newallChecked}/>
                                <AdList allChecked={newallChecked}/>
                                <AdList allChecked={newallChecked}/>
                                <AdList allChecked={newallChecked}/> */}
                            
                           
                              

                            </tbody>
                        </table>
                        <div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                            <div>Total Results <span>{assigned.length}</span></div>
                                <div class="ms-auto d-flex">
                                    <ReactPaginate  
                                    previousLabel={<i className="mdi mdi-chevron-left mdi-16px"></i>}
                                    nextLabel={<i className="mdi mdi-chevron-right mdi-16px"></i>}
                                    pageCount={pageCount3}
                                    onPageChange={changePage3}
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
                <div class="tab-pane fade" id="pills-assigned" role="tabpanel" aria-labelledby="pills-assigned-tab">
                <div class="search-area d-flex p-4">
                        <input class="form-control me-3" placeholder="Search user" onChange={(e) => (setapprovedFilter(e.target.value))} />
                        <button class="btn btn-primary">Search</button>
                    </div>
                                
                <table class="table">
                <AdsHead setallChecked={assignedallChecked => setassignedallChecked(assignedallChecked)}/>

                            <tbody>
                            {
                                displayResult.length?displayResult:''
                                
                                }
                                {/* <AdList allChecked={assignedallChecked}/>
                                <AdList allChecked={assignedallChecked}/>
                                <AdList allChecked={assignedallChecked}/>
                                <AdList allChecked={assignedallChecked}/> */}
                                

                            </tbody>
                        </table>
                        <div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                            <div>Total Results <span>{approved.length}</span></div>
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
                <div class="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">
                <div class="search-area d-flex p-4">
                        <input class="form-control me-3" placeholder="Search user" onChange={(e) => (setpendingFilter(e.target.value))} />
                        <button class="btn btn-primary">Search</button>
                    </div> 
                    <table class="table">
                <AdsHead   setallChecked={pendingallChecked => setpendingallChecked(pendingallChecked)} />

                            <tbody>
                            {
                            displayResult2.length?displayResult2:''
                             }       

                            </tbody>
                        </table>
                        <div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                            <div>Total Results <span>{pending.length}</span></div>
                                <div class="ms-auto d-flex">
                                    {/* <span class="pointer me-2"><i class="mdi mdi-chevron-left mdi-24px"></i></span>
                                    <span class="pointer"><i class="mdi mdi-chevron-right mdi-24px"></i></span> */}
                                    <ReactPaginate  
                                    previousLabel={<i className="mdi mdi-chevron-left mdi-16px"></i>}
                                    nextLabel={<i className="mdi mdi-chevron-right mdi-16px"></i>}
                                    pageCount={pageCount2}
                                    onPageChange={changePage2}
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

        </div>
    </div>
</div>
  )
}

export default AgentAssignments