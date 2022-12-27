import React, { useState } from "react";
// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

// toaster alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
function AddProduct() {
  // useState hook for form data management
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productImage, setProductImage] = useState(null);
  // error management hook
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // toast notification
  const Saved = () => {
    Swal.fire({
      title: "Product Saved",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  // form submission handling function

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    console.log(
      productId,
      productName,
      brandName,
      productColor,
      productPrice,
      productStock,
      productImage,
      productDetails
    );

    Saved();
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add New Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Product ID</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="12"
                          type="text"
                          name="productId"
                          value={productId}
                          onChange={(e) => setProductId(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>{" "}
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Product Name</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Samsung A55s"
                          type="text"
                          name="productName"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Brand Name</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Samsung"
                          type="text"
                          name="brandName"
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Colors</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Red Golden Black"
                          type="text"
                          name="productColor"
                          value={productColor}
                          onChange={(e) => setProductColor(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Price</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="45000"
                          type="Number"
                          name="productPrice"
                          value={productPrice}
                          onChange={(e) => setProductPrice(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>{" "}
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Available Stock</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="450"
                          type="Number"
                          name="productStock"
                          value={productStock}
                          onChange={(e) => setProductStock(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Select Product Image</Form.Label>
                        <Form.Control
                          type="file"
                          className="form-control"
                          name="productImage"
                          placeholder="Please select product image"
                          value={productImage}
                          onChange={(e) => setProductImage(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Details</label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          defaultValue=""
                          placeholder="Ram 3, Camera: 14MP"
                          type="text"
                          name="productDetails"
                          value={productDetails}
                          onChange={(e) => setProductDetails(e.target.value)}
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right mt-2"
                    type="submit"
                    variant="primary"
                    // onClick={handleSubmit}
                  >
                    Add Product
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}

export default AddProduct;
