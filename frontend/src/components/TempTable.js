import React, { useEffect, useState } from 'react'
import {getAllCompanies} from '../service/api'
import { Table } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';

const TempTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllData();
    }, [])
    const getAllData = async () => {
        let res = await getAllCompanies();
        const columns = [
            {
                label: 'Company Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Phone',
                field: 'phone',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 100
            },
            {
                label: 'State',
                field: 'state',
                sort: 'asc',
                width: 100
            },
            {
                label: 'City',
                field: 'city',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Description',
                field: 'description',
                sort: 'asc',
                width: 100
            }
        ]
        const rows = [];
        res.data.forEach(element => {
            rows.push({
                name: element.name,
                phone: element.phone,
                email: element.email,
                state: element.state,
                city: element.city,
                description: element.description
            })
        })
        setData({ columns, rows });
    }
    console.log(data)
  return (
    <>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </>
  )
}

export default TempTable