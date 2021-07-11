import React, { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from "react-router-dom";

function Customer(props) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [total, setTotal] = useState("");

  const apiUrl = `https://umgc-customer-495.herokuapp.com/customer?email=${props.match.params.id}`;

  function getArraySum(a) {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      const set = result.data;
      const prices = set.map((item) => item.price);
      const arrayTotal = getArraySum(prices);
      setTotal(arrayTotal);
      setShowLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {showLoading && (
        <div>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      <h3>List of Services and Price Total for {props.match.params.id}</h3>
      <ListGroup>
        {data.map((item, id) => (
          <ListGroup.Item key={id} action>
            {item.name} ${item.price}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <br />
      <div>
        <h3>Total</h3>
        <p>${total}</p>
      </div>
    </div>
  );
}

export default withRouter(Customer);
