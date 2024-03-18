import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "../../styles/Contact.css";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { modes } from "react-transition-group/SwitchTransition";
import CustomInputTag from "../../Helpers/CustomInputTag";
import {motion} from 'framer-motion';
import { useMediaQuery } from "react-responsive";

const ContactUs_Frame = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 764 });

   const form=useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      message: ''
    },
    mode: 'all'
  })

  const {register, formState: { errors }, handleSubmit ,reset} = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      message: ''
    },
    mode: 'all'
  },
  );

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/; // Assuming phone numbers are 10 digits long

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 overflow-hidden"
      >
        <div className="p-3 home-main-div-margin-bottom-and-top">
          <Row className="p-0 m-0">
            <Col className="home-heading">
              Contact Us
            </Col>
          </Row>
          <motion.form onSubmit={handleSubmit(onSubmit)}  
          //  initial={{
          //   opacity: 0,
          //   scale: 0,
          //   x: 50,
          //  }}
          //  whileInView={{ opacity: 1, scale: 1, x: 0 }}
          //   // whileHover={{ scale: 1.005 }}
          //  transition={{ duration: 1 }}
          
          >
            <Row className="p-0 m-0 d-flex flex-column justify-content-center align-items-center mt-5" >
              <Col xs={12} sm={12} md={8} lg={6} className="">
                <input
                  id="name"
                  name="name"
                  placeholder="Name"
                  className={`w-100 mt-4 ${errors.name && errors.name.message ? 'mb-2' : 'mb-4'}`}
                  style={formControl}
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required'
                    }
                  })}
                  />
                  {errors.name && <span style={{ color: 'red' ,paddingLeft:"5px",margin:'0px' }}>{errors.name.message}</span>}

              </Col>
              <Col xs={12} sm={12} md={8} lg={6} className="">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className={`w-100 mt-4 ${errors.phoneNumber && errors.phoneNumber.message ? 'mb-2' : 'mb-4'}`}
                  style={formControl}
                  {...register('phoneNumber', {
                    required: {
                      value:true,
                      message:'Please enter Phone Number'
                    },
                    pattern: {
                      value: phoneRegex,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                />
                {errors.phoneNumber && <p style={{ color: 'red' ,paddingLeft:"5px",margin:'0px'}}>{errors.phoneNumber.message}</p>}
              </Col>
              <Col xs={12} sm={12} md={8} lg={6} className="">
                <input
                  id="email"
                  name="email"
                  placeholder="Email ID"
                  className={`w-100 mt-4 ${errors.email && errors.email.message ? 'mb-2' : 'mb-4'}`}
                  style={formControl}
                  {...register('email', {
                    required:{
                      value:true,
                      message:'Please enter Email Address',
                    },
                    pattern: {
                      value: emailRegex,
                      message: 'Please enter a valid email address'
                    }
                  })}
                />
                {errors.email && <span style={{ color: 'red' ,paddingLeft:"5px",margin:'0px' }}>{errors.email.message}</span>}
              </Col>
              <Col xs={12} sm={12} md={8} lg={6} className="">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className={`w-100 mt-4 form-control-text-area ${errors.message && errors.message.message ? 'mb-2' : 'mb-4'}`}
                  rows={9}
                  {...register('message', { required: {
                    value:true,
                    message:'Please enter a Message'
                  } })}
                />
                {errors.message && <p style={{ color: 'red' ,paddingLeft:"5px",margin:'0px' }}>{errors.message.message}</p>}
              </Col>
              <Col  xs={12} sm={12} md={8} lg={8} className="d-flex justify-content-center">
                <Button
                  type="submit"
                  variant="outline-light"
                  className={`${isSmallScreen ? 'w-50':'w-25'} mt-3 mb-3 pt-3 pb-3`}
                  style={{ borderRadius: "50px" }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </motion.form>
        </div>
           
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs_Frame;

let formControl = {
  height: "47px",
  borderRadius: "10px",
  backgroundColor: "transparent",
  border: "1px solid white",
  paddingLeft: "10px",
  color: "#FFFFFF",
};
