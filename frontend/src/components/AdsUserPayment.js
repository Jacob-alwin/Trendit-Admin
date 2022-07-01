import React,{useState,useEffect} from 'react'

import AdsUserPaymentHead from './AdsUserPaymentHead'
import AdsUserPaymentList from './AdsUserPaymentList'
import ReactPaginate from "react-paginate";

import axios from 'axios'

 function AdsUserPayment(props) {
  console.log(props.p.name)
  const data1 = JSON.parse(localStorage.getItem('userInfo')) 

  const [allChecked, setallChecked] = useState(false)
  const [payment,setPayment] = useState([])
  const [paymentFilter,setpaymentFilter] = useState('')
  
   useEffect(() => {
   
    async function fetchData() {
      
      const config = {
          headers: {
            Authorization: `Bearer ${data1.token}`,
          },
        } 
   console.log(props.p._id)

   if (paymentFilter.length) {
    
      const  data9  = await axios.get('/api/users/payment/abc',config)     
      const res = data9.data
      const filter = res.filter((newVal) => {
          return newVal.name.startsWith(paymentFilter) 
                //      ^^^^ pass the data to get the payemnts name to search filer
        });

    setPayment(filter)      

   } else {
   const  data9  = await axios.get('/api/users/payment/abc',config)
   setPayment(data9.data)
   }

         }
         fetchData();

  }, [])
  console.log(payment,paymentFilter)



  const [pageNumber, setPageNumber] = useState(0);
  const resultPerPage = 5;
  const pagesVisited = pageNumber * resultPerPage;
  const displayResult = payment
      .slice(pagesVisited, pagesVisited + resultPerPage)
      .map((pay) => {
      return <AdsUserPaymentList allChecked={allChecked} payment={pay}/>;
      });
  const pageCount = Math.ceil(payment.length / resultPerPage);

  const changePage = ({ selected }) => {
      setPageNumber(selected);
  };



  return (
    <div>

<h4 class="page-sub-title mt-4">Payments</h4>
                    <div class="card admin-card">
                      <div class="search-area d-flex p-4">
                          <input class="form-control me-3" placeholder="Search user" onChange={(e) => (setpaymentFilter(e.target.value))} />
                          <button class="btn btn-primary">Search</button>
                      </div>
                      
                        
                        <div class="table-responsive">
                            <table class="table">

                                <AdsUserPaymentHead  setallChecked={allChecked => setallChecked(allChecked)}/>
                       
                                <tbody>
                                  {
                                    displayResult.length?displayResult:''
                                  }
                                  {/* {
                                    payment.map((pay) => {
                                      <AdsUserPaymentList allChecked={allChecked}/>
                                    })
                                  }
                                  */}
                                 {/* <AdsUserPaymentList allChecked={allChecked}/>
                                 <AdsUserPaymentList allChecked={allChecked}/>
                                 <AdsUserPaymentList allChecked={allChecked}/>
                                 <AdsUserPaymentList allChecked={allChecked}/> */}
                                 
                                </tbody>
                            </table>
                                      <div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                                        <div>Total Results <span>{payment.length}</span></div>
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
  )
}

export default AdsUserPayment