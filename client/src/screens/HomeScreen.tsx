import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Product as ProductInterface } from "../products";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[] | []>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.length &&
          products.map((product: ProductInterface) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default HomeScreen;
