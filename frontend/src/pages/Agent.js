import React,{useState,useEffect} from 'react'
import "../css/App.css";
import axios from 'axios';
import Headings from '../components/Headings'
import ReactPaginate from "react-paginate";


import { Link } from 'react-router-dom';
import UserNameEmailHead from '../components/UserNameEmailHead';
import AgentList from '../components/AgentList';


function Agent() {

    const [allChecked, setallChecked] = useState(false)
    const [agents,setAgents] = useState([])
    const [agentsFilter,setAgentsFilter] = useState("")
    
    var data1 = JSON.parse(localStorage.getItem('userInfo'))
    var head = "Users"
    useEffect(() => {
        
        async function fetchData() {
            console.log("hii")
            const config = {
                headers: {
                  Authorization: `Bearer ${data1.token}`,
                },
              }

              if (agentsFilter.length) {
                const  data  = await axios.get('/api/agent/AllAgentprofile',config)
                const res = data.data;
                const filter = res.filter((newVal) => {
                  return newVal.name.startsWith(agentsFilter) 
                        // Search Filtering
                });

                setAgents(filter)
                
              } else {
                const  data  = await axios.get('/api/agent/AllAgentprofile',config)
                setAgents(data.data)
                
              }
         
               }
               fetchData();
              
      }, [agentsFilter])
    console.log(allChecked)


  //   const [result2, setResult2] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const resultPerPage = 5;
  const pagesVisited = pageNumber * resultPerPage;

  const displayResult = agents
    .slice(pagesVisited, pagesVisited + resultPerPage)
    .map((agent) => {
      return  <AgentList allChecked={allChecked} p={agent} />;
    });

  const pageCount = Math.ceil(agents.length / resultPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

 
    var head = "Agents"

  return (


    
   
            <div class="main-content py-3">
                <Headings heading={head}/>
                <div class="card admin-card">
                <div class="d-flex p-4">
                    
                    <Link to= {"/agentcreate"}>
    
                    <button class="btn btn-primary">
                    <i class="mdi mdi-plus me-2"></i>Create Agent</button>
                    </Link>
                    </div>
                    


                    <div class="search-area d-flex p-4">
                                    <input class="form-control me-3" placeholder="Search Agent" onChange={(e) => (setAgentsFilter(e.target.value))} />
                                    <button class="btn btn-primary">Search</button>
                                </div>
                                
                <div class="table-responsive">
                        <table class="table">
                        <UserNameEmailHead setallChecked={allChecked => setallChecked(allChecked)} />
                                <tbody>
                                   {displayResult.length?displayResult:''}
                                   
                            </tbody>
                        </table>
                        <div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                                <div>Total Results <span>{agents.length}</span></div>
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

export default Agent