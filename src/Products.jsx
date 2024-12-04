import "./Style/products.css";
import ProductTile from "./Components/ProductTile";
import React, { useState, useEffect } from "react";
import loadigImg from "../Asset/Img/loading.svg";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
        const response = await axios("https://fakestoreapi.com/products"); // Replace with your API URL

        // if (!response) {
        //   throw new Error('Network response was not ok');
        // }
        const result = await response.data;
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <>
        <img className="loadingImg" src={loadigImg} alt="" />
      </>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Container>
        <h1 className="my-5">Products</h1>

        <hr />

        <Row>
          {data.map((item, index) => (
            <Col xs={12} sm={12} md={6} lg={4} xxl={3} key={index}>
              <div style={{ paddingTop: "10px", height: "100%" }}>
                <Link className="linkDesing" to={`/Products/${item.id}`}>
                  <ProductTile data={item}> </ProductTile>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Products;
