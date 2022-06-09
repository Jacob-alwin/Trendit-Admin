import React,{useState,useEffect}  from 'react'
import "../css/App.css";

import Headings from '../components/Headings'
import SearchBar from '../components/SearchBar'

import TableFooter from '../components/TableFooter';
import AdList from '../components/AdList';
import AdsHead from '../components/AdsHead';
import axios from 'axios';

function Ads() {


    const [allChecked, setallChecked] = useState(false)
    const [newallChecked, setnewallChecked] = useState(false)
    const [approvedallChecked, setapprovedallChecked] = useState(false)
    const [pendingallChecked, setpendingallChecked] = useState(false)
    const [assignedallChecked, setassignedallChecked] = useState(false)
    const [approvedProduct,setApprovedProduct] = useState([])
    const [pendingProduct,setPendingProduct] = useState([])


    console.log(allChecked)

    var head = "Advertisement"
    
   
        useEffect(() => {
        
            async function fetchData() {
          
             
                  const data =  await axios.get('http://127.0.0.1:5000/api/products/admin/approved')
                  setApprovedProduct(data.data)
                  const data1 = await axios.get('http://127.0.0.1:5000/api/products/admin/pending')
                  setPendingProduct(data1.data)
                  
                   }
                   fetchData();
                  
          }, [])

          const [pageNumber2, setPageNumber2] = useState(0);

          const resultPerPage2 = 5;
          const pagesVisited2 = pageNumber2 * resultPerPage2;

          const displayResult2 = pendingProduct
              .slice(pagesVisited2, pagesVisited2 + resultPerPage)
              .map((product) => {
              return <AdList title={product.name} id={product._id} product={product} allChecked={newallChecked}/>;
              });

          const pageCount2 = Math.ceil(pendingProduct.length / resultPerPage);

          const changePage2 = ({ selected }) => {
              setPageNumber2(selected);
          };


          const [pageNumber, setPageNumber] = useState(0);

          const resultPerPage = 5;
          const pagesVisited = pageNumber * resultPerPage;

          const displayResult = approvedProduct
              .slice(pagesVisited, pagesVisited + resultPerPage)
              .map((product) => {
              return <AdList title={product.name} id={product._id} product={product} allChecked={newallChecked}/>;
              });

          const pageCount = Math.ceil(approvedProduct.length / resultPerPage);

          const changePage = ({ selected }) => {
              setPageNumber(selected);
          };  
       
 
  return (
   
                <div class="main-content py-3">
                <Headings heading={head}/>

                      <ul class="nav nav-pills custom-tabs mb-3 mt-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-new-tab" data-bs-toggle="pill" data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-new" aria-selected="true">New</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-assigned-tab" data-bs-toggle="pill" data-bs-target="#pills-assigned" type="button" role="tab" aria-controls="pills-assigned" aria-selected="false">Assigned</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-pending-tab" data-bs-toggle="pill" data-bs-target="#pills-pending" type="button" role="tab" aria-controls="pills-pending" aria-selected="false">Pending</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-approved-tab" data-bs-toggle="pill" data-bs-target="#pills-approved" type="button" role="tab" aria-controls="pills-approved" aria-selected="false">Approved</button>
                        </li>
                    </ul>
                    <div class="card admin-card">
                    <div class="tab-content" id="pills-tabContent">
                               <div class="tab-pane fade show active" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab">
                               <SearchBar/>
                                <div class="table-responsive">
                                    <table class="table">
                                    <AdsHead setallChecked={newallChecked => setnewallChecked(newallChecked)}/>
                                        <tbody>
                                           {
                                              displayResult
                                           }
                                          
                                            {/* <AdList allChecked={newallChecked}/>           */}
                                           
                                         
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
                            <SearchBar/>
                                <div class="table-responsive">
                                    <table class="table">
                                    <AdsHead setallChecked={assignedallChecked => setassignedallChecked(assignedallChecked)}/>
                                        <tbody>
                                        {
                                               approvedProduct.map((product) => {
                                                return(<AdList title={product.name} id={product._id} product={product} allChecked={assignedallChecked}/>)
                                               })
                                           }
                                            {/* <AdList allChecked={assignedallChecked}/>          
                                            <AdList allChecked={assignedallChecked}/>
                                            <AdList allChecked={assignedallChecked}/>
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
                            <div class="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">
                                <SearchBar/>
                                <div class="table-responsive">
                                    <table class="table">
                                    <AdsHead setallChecked={pendingallChecked => setpendingallChecked(pendingallChecked)}/>
                                        <tbody>
                                        {
                                               displayResult2
                                           }
                                         
                                         
                                        </tbody>
                                    </table>
                                    <TableFooter/>
                                 </div>
                            </div>
                            <div class="tab-pane fade" id="pills-approved" role="tabpanel" aria-labelledby="pills-approved-tab">

                                <SearchBar/>
                                    <div class="table-responsive">
                                        <table class="table">
                                        <AdsHead setallChecked={approvedallChecked => setapprovedallChecked(approvedallChecked)}/>
                                        <tbody>
                                        {
                                               pendingProduct.map((product) => {
                                                return(
                                                <AdList title={product.name} id={product._id} product={product} allChecked={approvedallChecked}/>
                                                )
                                               })
                                           }
                                        
                                         
                                        </tbody>
                                    </table>
                                    <TableFooter/>
                                </div>

                            </div>
                   
                     
                    
                    </div>


                  
                    </div>
                </div>    
          
  )
}

export default Ads