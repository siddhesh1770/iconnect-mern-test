import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { addCompany } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-bottom: 1rem;
  }
`;

const AddCompany = () => {
  const [company, setCompany] = useState({
    name: "",
    description: "",
    city:"",
    state:"",
    phone:"",
    email:""
  });
  const onValueChange = (e) => {
    setCompany({...company, [e.target.name]: e.target.value});
    console.log(company);
  };
  const addCompanyDetails = async (e) => {
    const hello = await addCompany(company);

  }
  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Add New Company
        </Typography>
        <FormControl>
          <InputLabel>Company Name</InputLabel>
          <Input
            name="name"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            rows={4}
            multiline
            id="outlined-textarea"
            label="Description"
            placeholder="Write Company Descrption"
            name="description"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            name="phone"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            name="email"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>State</InputLabel>
          <Select
            label="State"
            onChange={(e) => {
              onValueChange(e);
            }}
            name="state"
            variant="outlined"
          >
            <MenuItem value={1770}>177afadsf0</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>City</InputLabel>
          <Select
            label="State"
            onChange={(e) => {
              onValueChange(e);
            }}
            name="city"
            variant="outlined"
          >
            <MenuItem value={1770}>17sfsadf70</MenuItem>
            <MenuItem value={541770}>5asf41770</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            addCompanyDetails(e);
          }}
          >
            Add Company
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddCompany;
