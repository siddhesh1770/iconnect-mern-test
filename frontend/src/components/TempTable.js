import React, { useEffect, useState } from "react";
import { DataGrid, GridSearchIcon, GridToolbar } from "@mui/x-data-grid";
import { getAllCompanies, updateCompany } from "../service/api";
import Info from "./Info";

const TempTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setDataUtil();
  }, []);
  const setDataUtil = async () => {
    const res = await getAllCompanies();
    setData(res.data);
  };
  const updateStateFromUi = async (dataTemp, id) => {
    let postData = {
      name: dataTemp.name,
      description: dataTemp.description,
      phone: dataTemp.phone,
      email: dataTemp.email,
      state: dataTemp.state,
      city: dataTemp.city,
      id: dataTemp.id,
      serial: dataTemp.serial,
      _id: id,
    };
    const res = await updateCompany(postData);
    console.log(res);
    // reload window now
    const temp = [...data];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i]._id === id) {
        temp[i] = postData;
        break;
      }
    }
    console.log(temp)
    setData(temp);
  };

  const updateInfo = async (data) => {
    console.log(data);
  };
  const inputHandler = (e, id) => {
    console.log(e.target.value);
    console.log(id);
  };
  const cols = [
    {
      headerName: "Serial",
      field: "serial",
      width: 100,
      sortable: true,
    },
    {
      headerName: "Name",
      field: "name",
      width: 150,
      filter: true,
      editable: true,
    },
    {
      headerName: "Email",
      field: "email",
      width: 200,
      editable: false,
    },
    {
      headerName: "Phone",
      field: "phone",
      width: 150,
      editable: true,
    },
    {
      headerName: "State",
      field: "state",
      width: 180,
      // filter: true,
      editable: true,
    },
    {
      headerName: "City",
      field: "city",
      width: 150,
      editable: true,
      // filter: true,
    },
    {
      headerName: "Descrpiption",
      field: "description",
      width: 750,
      editable: true,
      id: 232323,
      // add funcionality to edit and save in database
    },
  ];
  data.forEach((element) => {
    element.mongoId = element.id;
    element.id = element.serial;
  });
  const hello = () => {
    console.log("hello");
  };
  return (
    <>
      <Info />
      <div style={{ height: 450, width: "100%" }} className="main-table">
        <DataGrid
          rows={data}
          components={{
            Toolbar: GridToolbar,
          }}
          columns={cols}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellEditCommit={(e) => {
            //search for id in data
            let hell;
            let temp = data;
            temp.forEach((element) => {
              if (element.id === e.id) {
                hell = element;
                temp = element;
                temp[e.field] = e.value;
              }
            });
            updateStateFromUi(temp, hell._id);
          }}
        />
      </div>
    </>
  );
};

export default TempTable;
