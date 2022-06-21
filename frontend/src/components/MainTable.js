import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { getAllCompanies } from '../service/api';
import TableBody from './TableBody';
import TableHead from './TableHead';


const MainTable = () => {
    const [data, setData] = useState({});
    const cols = [
        {
            label: "name",
            accessor: "name",
            sortable: true,
        },
        {
            label: "phone",
            accessor: "phone",
            sortable: true,
        },
        {
            label: "email",
            accessor: "email",
            sortable: false,
        },
        {
            label: "state",
            accessor: "state",
            sortable: true,
        },
        {
            label: "city",
            accessor: "city",
            sortable: true,
        },
        {
            label: "description",
            accessor: "description",
            sortable: false,
        }
    ]
    useEffect(() => {
        setDataInHook();
    });
    const setDataInHook = async () => {
        let res = await getAllCompanies();
        setData(res.data);
    }
  return (
    <>
                <h2>All Companies List</h2>
                <br></br>
        <div className="main-table">
        <Table striped bordered hover>
            <TableHead columns={cols}/>
            <TableBody columns={cols} tableData={data}/>
        </Table>
        </div>
    </>
  )
}

export default MainTable