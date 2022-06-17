import React, { useState, useEffect } from "react";
import "../css/App.css";
import Headings from "../components/Headings";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import UserNameEmailHead from "../components/UserNameEmailHead";
import TableFooter from "../components/TableFooter";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Users() {
  const [allChecked, setallChecked] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState("");


  var data1 = JSON.parse(localStorage.getItem("userInfo"));
  var head = "Users";
  useEffect(() => {
    async function fetchData() {
      console.log("hii");
      const config = {
        headers: {
          Authorization: `Bearer ${data1.token}`,
        },
      };

      if (usersFilter) {
        const data = await axios.get("/api/users", config);
        const res = data.data  
        const filter = res.filter((newVal) => {
          //Search Filtering
          return newVal.name.startsWith(usersFilter) 
        });

        setUsers(filter);

      } else {
        const data = await axios.get("/api/users", config);
        setUsers(data.data);  
      }

    }
    fetchData();
  }, [usersFilter]);

  const [pageNumber, setPageNumber] = useState(0);

  const resultPerPage = 5;
  const pagesVisited = pageNumber * resultPerPage;

  const displayResult = users
    .slice(pagesVisited, pagesVisited + resultPerPage)
    .map((user) => {
      return <UserList allChecked={allChecked} p={user} />;
    });

  const pageCount = Math.ceil(users.length / resultPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  

  return (
    <div class="main-content py-3">
      <Headings heading={head} />

      <div class="card admin-card">
        <div class="search-area d-flex p-4">
            <input class="form-control me-3" placeholder="Search user" onChange={(e)=>(setUsersFilter(e.target.value))} />
            <button class="btn btn-primary">Search</button>
        </div>
                                
        <div class="table-responsive">
          <table class="table">
            <UserNameEmailHead
              setallChecked={(allChecked) => setallChecked(allChecked)}
            />
            <tbody>{displayResult.length?displayResult:''}</tbody>
          </table>
          <div class="d-flex pagination ps-4 pe-4 pb-4 align-items-center">
                                <div>Total Results <span>{users.length}</span></div>
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
  );
}

export default Users;
