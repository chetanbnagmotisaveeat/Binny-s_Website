import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "../../styles/OurTeam/Our_Team.css";


const OurTeam = () => {
   
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 border border-1 border-primary overflow-hidden"
      >
        <div className="p-3 our-team-main-div-margin-top">
          <Row className="p-0 m-0">
            <Col className="our-team-heading border border-1 border-parimary">
               OurTeam
            </Col>
            <Col className="border border-1 border-parimary">
                <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                            1
                        </div>
                        <div className="col-lg-6">
                            2   
                        </div>
                      </div>
                </div>
                   
            </Col>
          </Row>
          
            

        
        </div>
           
      </Container>
    </ThemeProvider>
  )
}

export default OurTeam

