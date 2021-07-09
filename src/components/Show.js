import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

function Show(props) {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = `https://service-api-495.herokuapp.com/service/${props.match.params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);
  const addProduct = (id) => {
    props.history.push({
      pathname: `/add/${id}`,
    });
  };

  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Jumbotron style={{ background: "transparent" }}>
        <h1>Selected Service</h1>
        <h2>{data.name}</h2>
        <h1>Price</h1>
        <h2>${data.price}</h2>
        <p>{data.description}</p>
        <p>
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              addProduct(data._id);
            }}
          >
            Add
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Show);
