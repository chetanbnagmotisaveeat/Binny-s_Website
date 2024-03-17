import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { motion } from "framer-motion";
import "../../styles/OurTeam/Our_Team.css";
import CustomImageDiv from "./CustomImageDiv";

const ourTeamArray = [
  [
    {
      id: 1,
      name: "Nagji bhai Patel-1",
      post: "MaCo-Founder of Binny’s Jewellery Private LTDnage",
      imageUrl: "/images/OurTeam/image-1.png",
    },
    {
      id: 2,
      name: "Nanubhai Patel",
      post: "Co-Founder of Binny’s Jewellery Private LTD",
      imageUrl: "/images/OurTeam/image-2.png",
    },
    {
      id: 3,
      name: "Raj Patel",
      post: "Chairman & Co-Founder of Binny’s Jewellery Private LTD",
      imageUrl: "/images/OurTeam/image-3.png",
    },
    {
      id: 4,
      name: "Sneh Patel",
      post: "Managing Director & CEO",
      imageUrl: "/images/OurTeam/image-4.png",
    },
    {
      id: 5,
      name: "Riten Mavani",
      post: "General Manager",
      imageUrl: "/images/OurTeam/image-5.png",
    },
    {
      id: 6,
      name: "Akshay Shah",
      post: "National Sales Head",
      imageUrl: "/images/OurTeam/image-6.png",
    },
    {
      id: 7,
      name: "Mayank Mehta",
      post: "After Sales",
      imageUrl: "/images/OurTeam/image-7.png",
    },
    {
      id: 8,
      name: "Kuldip Rathod",
      post: "Production Manager",
      imageUrl: "/images/OurTeam/image-8.png",
    },
    {
      id: 9,
      name: "Janki Vaghane",
      post: "R&D Designer",
      imageUrl: "/images/OurTeam/image-9.png",
    },
    {
      id: 10,
      name: "Arif Sekh",
      post: "Product Development Manager",
      imageUrl: "/images/OurTeam/image-10.png",
    },
    {
      id: 11,
      name: "Aarti Pipaliya",
      post: "Accounting and Finance",
      imageUrl: "/images/OurTeam/image-11.png",
    },
  ],
];

const OurTeam = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 overflow-hidden"
      >
        <div className="p-3 our-team-main-div-margin-top text-light">
          <Row className="justify-content-center align-items-center">
            <Col
              lg={12}
              xs={12}
              className="our-team-heading text-center"
            >
              Our Team
            </Col>
          
          {
              ourTeamArray && ourTeamArray.map((item,outerIndex)=>{
                return (
                  <Col key={outerIndex + item.length} lg={12} xs={12} className="">
                  <div className="container-fluid">
                    <div className="row mt-2 d-flex  justify-content-between">
                      {
                        item.map((curElem,innerIndex)=>{
                          return(
                          <CustomImageDiv key={curElem.name}  curElem={curElem} outerIndex={outerIndex} innerIndex={innerIndex}/>
                          )
                        })
                      }
                     
                    </div>
                  </div>
                </Col>
                )
              })
          }
          </Row>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default OurTeam;
