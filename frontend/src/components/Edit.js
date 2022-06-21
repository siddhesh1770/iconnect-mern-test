import React from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { updateCompany, getStates, getCompanyById } from "../service/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddCompany = () => {
  const navigate = useNavigate();
  const { id} = useParams();
  const [statesAndCities, setStatesAndCities] = useState([]);
  useEffect(() => {
    getAllStates();
  }, []);
  const getAllStates = async () => {
    const data2 = await getCompanyById(id);
    const data = await getStates();
    setStatesAndCities(data);
    setCompany(data2.data);
  };

  const def = {
    name: "",
    email: "",
    phone: "",
    description: "",
    state: "",
    city: "",
  };
  const [company, setCompany] = React.useState(def);
  const changeState = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };
  const updateCompanyNow = async (e) => {
    const res = await updateCompany(company);
    if(res.success === true) {
        navigate('/');
    } else {
      window.alert(res.message);
    }
  };
  const changeCity= (e) => {
    changeState(e);
    const city = document.getElementById("city");
    city.removeAttribute("disabled");
    console.log(statesAndCities)
    statesAndCities[e.target.value].forEach((elem) => {
        const option = document.createElement("option");
        option.value = elem;
        option.text = elem;
        city.appendChild(option);
    })
  }
  return (
    <div>
      <h1>Edit Company Details</h1>
      <div className="main-form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              onChange={changeState}
              placeholder="Enter company name"
              value={company.name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={changeState}
              type="email"
              placeholder="Enter company email"
              value={company.email}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              onChange={changeState}
              type="text"
              placeholder="Enter company phone"
              value={company.phone}
            />
            <Form.Text className="text-muted">
              Please add phone with country code
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Select
              name="state"
              onChange={changeCity}
              id="state"
              aria-label="Default select example"
              value={company.state}
            >
              <option>Select State</option>
              {Object.keys(statesAndCities).map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Select
              id="city"
              disabled
              name="city"
              aria-label="Default select example"
              onChange={changeState}
              value={company.city}
            ></Form.Select>
          </Form.Group>

          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <FormControl
              as="textarea"
              onChange={changeState}
              aria-label="With textarea"
              name="description"
              value={company.description}
            />
          </InputGroup>
          <br />
          <Button def onClick={updateCompanyNow} variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCompany;
