import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

const TableBody = ({ columns, tableData }) => {
  const navigate = useNavigate();
  return (
    <>
      <tbody>
        {tableData.map((elem) => {
          return (
            <tr key={elem.id}>
              {columns.map(({ accessor }) => {
                return <>
                  <td key={accessor}>{elem[accessor]}</td>
                </>;
              })}
              <td>
                {console.log(elem)}
                <Button variant="primary" onClick={() => navigate(`/edit/${elem.id}`)}>Edit</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
