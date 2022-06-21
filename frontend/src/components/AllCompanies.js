import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { getAllCompanies } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCompanies = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    getAllData();
  }, []);
  const getAllData = async () => {
    let res = await getAllCompanies();
    setData(res.data);
  }
  return (
    <>
    <br />
        <h2 style={{margin:"auto", width:"50%"}}>All Companies</h2>
      <div className="main-table">

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Company Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>State</th>
              <th>City</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="tbody-main">
            {/* <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
            {
                data.map((elem, index) => {
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{elem.name}</td>
                        <td>{elem.phone}</td>
                        <td>{elem.email}</td>
                        <td>{elem.state}</td>
                        <td>{elem.city}</td>
                        <td style={{maxWidth: "450px",wordWrap:"break-word"}}>{elem.description}</td>
                        <td>
                            <Button className="btn btn-primary" onClick={() => {
                                window.location.href = `/edit/${elem._id}`;
                            }}>Edit</Button>
                            <Button className="btn btn-danger">Delete</Button>
                        </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AllCompanies;
