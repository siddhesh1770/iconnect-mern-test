import React from "react";
import Table from "react-bootstrap/Table";
import { getAllCompanies } from "../service/api";
import { useEffect, useState } from "react";
import TBody from "./TBody";
import Button from "react-bootstrap/Button";


const AllCompanies = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("asc");
  useEffect( () => {
    getAllData();
  }, []);
  const getAllData = async () => {
    let res = await getAllCompanies();
    sortData(res.data);
  }
  const sortData = (data) => {
    if (order === "asc") {
      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
      setOrder("desc");
    } else {
      setData(data.sort((a, b) => b.name.localeCompare(a.name)));
      setOrder("asc");
    }
  }
  const handleSortingChange = () => {
    const currOrder = order;
    if(currOrder === "asc"){
      setOrder("desc");
    }else{
      setOrder("asc");
    }
    sortData(data);
  }
  return (
    <>
    <br />
        <h2 style={{margin:"auto", width:"50%"}}>All Companies</h2>
        <br></br>
        <h5>Click sort to sort ascending and descending vice versa with respect to name</h5>
        {
          // use the sort field and order to sort the data
        }
        <Button onClick={handleSortingChange}>Sort</Button>
      <div className="main-table">

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th onClick={handleSortingChange}>Company Name</th>
              <th onClick={handleSortingChange}>Phone</th>
              <th onClick={handleSortingChange}>Email</th>
              <th onClick={handleSortingChange}>State</th>
              <th onClick={handleSortingChange}>City</th>
              <th onClick={handleSortingChange}>Description</th>
              <th onClick={handleSortingChange}>Actions</th>
            </tr>
          </thead>
          <tbody id="tbody-main">
            <TBody data={data} />
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AllCompanies;
