import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AdList from './AdList'
import SearchBar from './SearchBar'
import TableFooter from './TableFooter'
import AdsHead from './AdsHead'

function AgentAssignments({profile}) {


    const [newallChecked, setnewallChecked] = useState(false)
    const [assignedallChecked, setassignedallChecked] = useState(false)
    const [pendingallChecked, setpendingallChecked] = useState(false)
    const data1 = JSON.parse(localStorage.getItem('userInfo')) 
    const [approved,setApproved] = useState([])
    const [pending,setPending] = useState([])
    useEffect(()=>{
        async function fetchData() {
      
            const config = {
                headers: {
                  Authorization: `Bearer ${data1.token}`,
                },
              } 
         
         const  data2  = await axios.get(`/api/users/approved/${profile}`,config)
             
              setApproved(data2.data)

              const  data3  = await axios.get(`/api/users/pending/${profile}`,config)
             
              setPending(data3.data)      
             
               }
               fetchData();    
      
      
    },[data1,pending,approved])

    


            const [pageNumber2, setPageNumber2] = useState(0);

            const resultPerPage2 = 5;
            const pagesVisited2 = pageNumber2 * resultPerPage2;

            const displayResult2 = pending
                .slice(pagesVisited2, pagesVisited2 + resultPerPage)
                .map((product) => {
                return <AdList title={product.name} id={product._id} product={product} allChecked={newallChecked}/>;
                });

            const pageCount2 = Math.ceil(pending.length / resultPerPage);

            const changePage2 = ({ selected }) => {
                setPageNumber2(selected);
            };


            const [pageNumber, setPageNumber] = useState(0);

            const resultPerPage = 5;
            const pagesVisited = pageNumber * resultPerPage;

            const displayResult = approved
                .slice(pagesVisited, pagesVisited + resultPerPage)
                .map((product) => {
                return <AdList title={product.name} id={product._id} product={product} allChecked={newallChecked}/>;
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
                     <SearchBar/>
                    <div class="table-responsive">
                        <table class="table">
                           <AdsHead setallChecked={newallChecked => setnewallChecked(newallChecked)} />
                            <tbody>
                             {displayResult
                             }
                            
                            {/* <AdList allChecked={newallChecked}/>
                            <AdList allChecked={newallChecked}/>
                            <AdList allChecked={newallChecked}/>
                                <AdList allChecked={newallChecked}/> */}
                   
                              

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
                </div>
                <div class="tab-pane fade" id="pills-assigned" role="tabpanel" aria-labelledby="pills-assigned-tab">
                <table class="table">
                <AdsHead setallChecked={assignedallChecked => setassignedallChecked(assignedallChecked)}/>

                            <tbody>
                            {
                                displayResult
                             }
                                {/* <AdList allChecked={assignedallChecked}/>
                                <AdList allChecked={assignedallChecked}/>
                                <AdList allChecked={assignedallChecked}/>
                                <AdList allChecked={assignedallChecked}/> */}
                                

                            </tbody>
                        </table>
                       <TableFooter/>
                </div>
                <div class="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">
                <table class="table">
                <AdsHead   setallChecked={pendingallChecked => setpendingallChecked(pendingallChecked)} />

                            <tbody>
                            {
                            displayResult2
                             }       

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