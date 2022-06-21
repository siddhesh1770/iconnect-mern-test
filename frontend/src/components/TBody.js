import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TBody = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
        {console.log(data)}
      {data.map((elem, index) => {
        return (
          <tr key={index} id={elem.id}>
            <td>{index + 1}</td>
            <td>{elem.name}</td>
            <td>{elem.phone}</td>
            <td>{elem.email}</td>
            <td>{elem.state}</td>
            <td>{elem.city}</td>
            <td style={{ maxWidth: "450px", wordWrap: "break-word" }}>
              {elem.description}
            </td>
            <td>
              <Button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/edit/" + elem._id);
                }}
              >
                Edit
              </Button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TBody;
