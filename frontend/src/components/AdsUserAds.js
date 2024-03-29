import React,{useState} from 'react'
import { useEffect } from 'react'
import AdList from './AdList'
import AdsHead from './AdsHead'
import SearchBar from './SearchBar'
import TableFooter from './TableFooter'
import axios from 'axios'
function AdsUserAds(props) {


    const [pendingChecked, setpendingChecked] = useState(false)
    const [approved,setApproved] = useState("approved")
    const [product1,setProduct] = useState([])
    const [payment,setPayment] = useState([])
    
    const [newChecked, setnewChecked] = useState(false)
     var data1 ;
     
     useEffect(() => {
         console.log(props.p1._id)
        data1 = JSON.parse(localStorage.getItem('userInfo'))
        async function fetchData() {
         console.log(approved)
          const config = {
              headers: {
                Authorization: `Bearer ${data1.token}`,
              },
            }
            if(approved === "approved"){
                console.log("1")
            const  data  = await axios.get(`/api/users/approved/${props.p1._id}`,config)
            console.log("1")
            setProduct(data.data)
            console.log("1")
            }
            else{
                console.log("2")
            const  data  = await axios.get(`/api/users/notapproved/${props.p1._id}`,config)    
            setProduct(data.data)
            console.log(data.data)
            
            }
           
             }
             fetchData();
       console.log(product1)
      }, [approved])


    
            const [pageNumber, setPageNumber] = useState(0);

            const resultPerPage = 5;
            const pagesVisited = pageNumber * resultPerPage;

            const displayResult = product1
                .slice(pagesVisited, pagesVisited + resultPerPage)
                .map((pro) => {
                return <AdList allChecked={newChecked} title={pro.name} id={pro._id} product={pro}/>;
                });

            const pageCount = Math.ceil(product1.length / resultPerPage);

            const changePage = ({ selected }) => {
                setPageNumber(selected);
            };




  return (
    <div>


                    <h4 class="page-sub-title mt-3">Ads</h4>
                    <ul class="nav nav-pills custom-tabs mb-3 mt-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-new-tab" data-bs-toggle="pill" data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-new" aria-selected="true" onClick={()=>setApproved('approved')}>Approved</button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-pending-tab" data-bs-toggle="pill" data-bs-target="#pills-pending" type="button" role="tab" aria-controls="pills-pending" aria-selected="false" onClick={()=>setApproved('notapproved')}>Pending</button>
                        </li>
                    </ul>
                    <div class="card admin-card">
                        <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab">
                                    <SearchBar/>
                                    <div class="table-responsive">
                                        <table class="table">
                                           <AdsHead  setallChecked={newChecked => setnewChecked(newChecked)}/>
                                            <tbody>
                                            {
                                                product1.map((pro) => {
                                                    return(<AdList allChecked={newChecked} title={pro.name} id={pro._id} product={pro}/>)
                                                })
                                               
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
                                <div class="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">

                                <SearchBar/>
                                    <div class="table-responsive">
                                        <table class="table">
                                           <AdsHead   setallChecked={pendingChecked => setpendingChecked(pendingChecked)}/>
                                            
                                            <tbody>
                                            {
                                              displayResult
                                               
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
                        
                        </div>
                    </div>

    </div>
  )
}

export default AdsUserAds