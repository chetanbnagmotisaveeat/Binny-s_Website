import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "../../styles/Contact.css";
import "../../styles/Book_Appointment/Book_Appointment.css"
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CustomInputTag from "../../Helpers/CustomInputTag";
import {motion} from 'framer-motion';
import { useMediaQuery } from "react-responsive";


let formControl = {
    height: "55px",
    borderRadius: "10px",
    backgroundColor: "transparent",
    border: "1px solid #FFFFFF",
    paddingLeft: "10px",
    color: "#FFFFFF",
    fontSize:'20px'
    
  };


const Book_Appointment = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 855 });

    const form=useForm({
        defaultValues: {
          name: '',
          phoneNumber: '',
          email: '',
          productName: ''
        },
        mode: 'all'
      })
      
    const {handleSubmit ,reset} =form;
    
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex = /^\d{10}$/; 
    
      const onSubmit = (data) => {
        console.log(data);
        reset();
      };
      
  return (
    <>
     <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 overflow-hidden"
      >
        <div className="book-main-div-margin-bottom-and-top">
          <Row className="p-0 m-0">
            <Col className="book-heading">
               Book an appointment
            </Col>
          </Row>
          <motion.form onSubmit={handleSubmit(onSubmit)}>
            <Row className="p-0 m-0 d-flex flex-column justify-content-center align-items-center mt-5" >
              <Col xs={12} sm={12} md={8} lg={6} className="">
                <CustomInputTag type="input" form={form} id="name" placeholder="Name" formControl={formControl} pattern={false} />
              </Col>
              <Col xs={12} sm={12} md={8} lg={6} className="">
              <CustomInputTag type="input" form={form} id="phoneNumber" placeholder="Phone Number" formControl={formControl} pattern={phoneRegex} />
              </Col>
              <Col xs={12} sm={12} md={8} lg={6} className="">
              <CustomInputTag type="input"  form={form} id="email" placeholder="Email ID" formControl={formControl} pattern={emailRegex} />
              </Col>
              <Col xs={12} sm={12} md={8} lg={6} className="">
              <CustomInputTag type="input"  form={form} id="productName" placeholder="Product Name" formControl={formControl} pattern={false} />
              </Col>
              <Col  xs={12} sm={12} md={8} lg={8} className="d-flex justify-content-center mt-5">
                <Button
                  type="submit"
                  variant="outline-light"
                  className={`${isSmallScreen ? 'w-50':'w-25'} mt-4 mb-4 pt-3 pb-3`}
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
    
    </>
  )
}

export default Book_Appointment