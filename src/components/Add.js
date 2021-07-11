import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

function Add(props) {
  const [service, setService] = useState({
    _id: "",
    service_email: "",
    service_name: "",
    service_price: "",
    service_description: "",
  });
  const [data, setData] = useState({
    _id: "",
    data_name: "",
    data_price: "",
    data_description: "",
  });
  const [showLoading, setShowLoading] = useState(false);

  const serviceAPIUrl = `https://service-api-495.herokuapp.com/service/${props.match.params.id}`;
  const customerAPIUrl = `https://umgc-customer-495.herokuapp.com/customer`;

  useEffect(() => {
    setShowLoading(true);
    const fetchData = async () => {
      const result = await axios(serviceAPIUrl);
      setData(result.data);
      console.log(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);

  const saveService = (evt) => {
    setShowLoading(true);
    evt.preventDefault();
    const product = {
      email: service.email,
      name: data.name,
      price: data.price,
      description: data.description,
    };
    return new Promise(function (resolve, reject) {
      axios
        .post(customerAPIUrl, product)
        .then((result) => {
          setShowLoading(false);
          alert("Item has been added to your quote.");
          props.history.push(`/`);
        })
        .then((response) => {
          resolve(response);
        });
    }).catch((error) => console.log(error), setShowLoading(false));
  };
  const onChange = (evt) => {
    evt.persist();
    setService({
      ...service,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Jumbotron>
        <Form onSubmit={saveService}>
          <Form.Group>
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              id="email"
              placeholder="Please Enter Your Email"
              value={service.email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              placeholder={data.name}
              value={data.name}
              onChange={onChange}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Service price</Form.Label>
            <Form.Control
              as="textarea"
              name="price"
              id="price"
              rows="1"
              placeholder={data.price}
              value={data.price}
              onChange={onChange}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Service description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              id="description"
              rows="6"
              value={data.description}
              onChange={onChange}
              readOnly
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add to your Quote
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Add);
