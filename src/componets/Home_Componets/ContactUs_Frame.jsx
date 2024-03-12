import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "../../styles/Contact.css";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { modes } from "react-transition-group/SwitchTransition";

const ContactUs_Frame = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      emial: '',
      message: ''
    },
    mode: 'all'
  },
  );

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/; // Assuming phone numbers are 10 digits long

  const onSubmit = (data) => {
    console.log(data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center home-main-div-margin-bottom-and-top">
            <Row className="p-0 m-0">
              <Col xs={12} sm={12} md={12} lg={12} className="border border-1 border-primary">
                <input
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-100 mt-4 mb-4"
                  style={formControl}
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required'
                    }
                  })}
                />
                {errors.name && <p style={{ color: 'blue' }}>{errors.name.message}</p>}

              </Col>

              You've placed the error message rendering condition inside the input component, but it should be outside the input component, specifically after it. Here's the corrected version:

              jsx
              Copy code
              <Col xs={12} sm={12} md={12} lg={12} className="border border-1 border-primary">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-100 mt-4 mb-4"
                  style={formControl}
                  {...register('phoneNumber', {
                    required: true,
                    pattern: {
                      value: phoneRegex,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                />
                {errors.phoneNumber && <p style={{ color: 'blue' }}>{errors.phoneNumber.message}</p>}
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="border border-1 border-primary">
                <input
                  id="email"
                  name="email"
                  placeholder="Email ID"
                  className="w-100 mt-4 mb-4"
                  style={formControl}
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: emailRegex,
                      message: 'Please enter a valid email address'
                    }
                  })}
                />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="border border-1 border-primary">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-100 mt-4 mb-4 form-control-text-area"
                  rows={7}
                  {...register('message', { required: true })}
                />
              </Col>
              <Col className="d-flex justify-content-center">
                <Button
                  type="submit"
                  variant="outline-light"
                  className="w-50 mt-4 mb-4 pt-3 pb-3"
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
