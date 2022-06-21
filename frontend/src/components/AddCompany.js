import React from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { addCompany, getStates } from "../service/api";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const AddCompany = () => {
  const navigate = useNavigate();
  const [statesAndCities, setStatesAndCities] = useState([]);
  useEffect(() => {
    getAllStates();
  }, []);
  const getAllStates = async () => {
    const data = await getStates();
    setStatesAndCities(data);
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
  const createCompany = async (e) => {
    const res = await addCompany(company);
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
    <>
      <div className="main-form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              onChange={changeState}
              placeholder="Enter company name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={changeState}
              type="email"
              placeholder="Enter company email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              onChange={changeState}
              type="text"
              placeholder="Enter company phone"
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
            ></Form.Select>
          </Form.Group>

          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <FormControl
              as="textarea"
              onChange={changeState}
              aria-label="With textarea"
              name="description"
            />
          </InputGroup>
          <br />
          <Button def onClick={createCompany} variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddCompany;
