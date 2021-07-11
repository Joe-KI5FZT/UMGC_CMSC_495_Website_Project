import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

function Email(props) {
  const [email, setEmail] = useState("");
  const handleCustomerList = (evt) => {
    evt.preventDefault();
    props.history.push({
      pathname: `/customer/${email}`,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setEmail(evt.target.value);
  };
  return (
    <div>
      <h3>Please enter your email address to see a price quote.</h3>
      <Form onSubmit={handleCustomerList}>
        <Form.Label>User Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          id="email"
          placeholder="Please Enter Your Email"
          onChange={handleSubmit}
        />
        <Button variant="primary" type="submit">
          Search for Quote
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(Email);
