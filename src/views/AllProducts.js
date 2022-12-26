import React from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function AllProducts() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List of products</Card.Title>
                {/* <p className="card-category">
                List of all available 
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Product ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Brand</th>
                      <th className="border-0">Colors</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Details</th>
                      <th className="border-0">Stock</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Oppo Reno 3</td>
                      <td>OPPO</td>
                      <td>Color</td>
                      <td>60000</td>
                      <td>Oud-Turnhout</td>
                      <td>345</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger mx-3">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllProducts;
