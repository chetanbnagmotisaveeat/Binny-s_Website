import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "../../styles/Contact.css";
import { Button } from "react-bootstrap";

const ContactUs_Frame = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 border border-1 border-primary overflow-hidden"
      >
        <div className="p-3 home-main-div-margin-bottom-and-top">
          <Row className="p-0 m-0">
            <Col className="home-heading border border-1 border-parimary">
              Contact Us
            </Col>
          </Row>
          <form className="d-flex flex-column justify-content-center align-items-center">
            <Row className="p-0 m-0">
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className="border border-1 border-primary"
              >
                <input
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-100 mt-4 mb-4"
                  style={formControl}
                />
                </Col>
                <Col 
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className="border border-1 border-primary"
                
                
                
                
                >
                 <input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-100 mt-4 mb-4"
                  style={formControl}
                />
                
                
                
                </Col>
                <Col 
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className="border border-1 border-primary"
                
                
                
                >
                 <input
                  id="email"
                  name="email"
                  placeholder="Email ID"
                  className="w-100 mt-4 mb-4"
                  style={formControl}
                />
                
                </Col>
                <Col 
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className="border border-1 border-primary"
                >
               
               
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-100 mt-4 mb-4 form-control-text-area"
                  rows={7}
                />
                  </Col>
                  <Col>
                <Button
                  type="submit"
                  variant="outline-light"
                  className="w-25 mt-4 mb-4 pt-3 pb-3"
                  style={{ borderRadius: "50px" }}
                >
                  Submit
                </Button>
                  
                  </Col>
            </Row>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs_Frame;

let formControl = {
  height: "40px",
  borderRadius: "10px",
  backgroundColor: "transparent",
  border: "1px solid white",
  paddingLeft: "10px",
  color: "#FFFFFF",
};
