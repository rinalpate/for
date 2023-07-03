import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <section>
          <div className = "left-data mt-3">
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicDate">
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-4"
                controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="right_data">
          <div className="sign_img">
          <img src="./image/laptop.png" style={{maxWidth:480}} alt="" />
          </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Home;  