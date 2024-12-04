import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import loadigImg from "../Asset/Image/loading.svg";
import axios from "axios";
import { Col, Row, Container, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";

import "../Style/ProductDetailsStyle.css";
function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
        const response = await axios(`https://fakestoreapi.com/products/${id}`); // Replace with your API URL

        // if (!response) {
        //   throw new Error('Network response was not ok');
        // }
        const result = await response.data;
        //console.log(result)
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
        <Row
          className="my-5"
          style={{ justifyItems: "center", alignItems: "center" }}
        >
          <Col xs={12} md={6} className="py-5" style={{ height: "100%" }}>
            <div style={{ textAlign: "center", maxHeight: "500px" }}>
              <img
                src={data.image}
                alt=""
                style={{
                  maxHeight: "500px",
                  maxWidth: "500px",
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="py-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <h2>{data.title}</h2>
            {/* <span style={{display:"inline-block"}}> */}
            <Rating
              name="half-rating-read"
              defaultValue={data.rating.rate}
              precision={0.1}
              readOnly
            />
            <p>
              {data.rating.rate} From {data.rating.count} Customer reviews
            </p>
            <p>{data.description}</p>
            <Button
              aria-label="Add to Cart"
              onClick={() => {
                dispatch(
                  addItem({
                    id: props.data.id,
                    qty: 1,
                  })
                );
                console.log(cart);
              }}
            >
              Add to Cart
            </Button>

            {/* </span> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ProductDetails;
