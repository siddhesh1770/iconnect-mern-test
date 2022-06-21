import React from 'react'
import { DataGrid} from '@mui/x-data-grid';
import testData from './testData.json';
import { useNavigate } from 'react-router-dom';

const TempTable = () => {
    const updateInfo = async (data) => {
        console.log(data)
    }
    const inputHandler = (e, id) => {
        console.log(e.target.value);
        console.log(id);
    }
    const cols = [
        {
            headerName: 'Serial',
            field: 'serial',
            width: 100,
            sortable: true,
        },
        {
            headerName: 'Name',
            field: 'name',
            width: 150,
            filter: true,
            editable: true,
        },
        {
            headerName: 'Email',
            field: 'email',
            width: 200,
            editable: true,
        },
        {
            headerName: 'Phone',
            field: 'phone',
            width: 150,
            editable: true,
        },
        {
            headerName: 'State',
            field: 'state',
            width: 180,
            // filter: true,
            editable: true,
        },
        {
            headerName: 'City',
            field: 'city',
            width: 150,
            editable: true,
            // filter: true,
        },
        {
            headerName: 'Descrpiption',
            field: 'description',
            width: 750,
            editable: true,
            id: 232323,
            // add funcionality to edit and save in database

        }
    ]
    // convert all serial to id from testData.data
    let data = testData.data;
    data.forEach(element => {
        element.mongoId = element.id;
        element.id = element.serial;
    });
    const hello = () => {
        console.log('hello');
    }
  return (
    <div style={{height: 400, width: '100%'}} className="main-table">
        <DataGrid 
            rows={data}
            columns={cols}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onCellEditCommit={(e) => {
                console.log('onCellEditCommit');
                //search for id in data
                data.forEach(element => {
                    if(element.id === e.id){
                        console.log(element);
                    }
                })
            }}
        />
    </div>
  )
}

export default TempTable