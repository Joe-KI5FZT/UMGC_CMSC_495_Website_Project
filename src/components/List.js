import React, { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from "react-router-dom";

function List(props) {
  // useState helps set the state without using this.state
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  // API where the data is coming from
  const apiUrl = "https://service-api-495.herokuapp.com/service";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };
    fetchData();
  }, []);
  // Function that stores the id shows the details using the stored id
  const showDetail = (_id) => {
    props.history.push({
      pathname: `/show/${_id}`,
    });
  };
  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <ListGroup>
        {data.map((item, id) => (
          <ListGroup.Item
            key={id}
            action
            onClick={() => {
              showDetail(item._id);
            }}
          >
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default withRouter(List);
