import React from "react";
import "./packages.css";

import photo2 from "../images/photo2.jpeg";
import photo3 from "../images/photo3.jpeg";
import photo4 from "../images/photo4.jpeg";
import photo6 from "../images/photo6.jpeg";
import photo7 from "../images/photo7.jpeg";
import photo5 from "../images/photo5.jpeg";
import photo9 from "../images/photo9.jpeg";
import photo1 from "../images/photo1.jpeg";
import photo8 from "../images/photo8.jpeg";
import atul1 from "../images/atul1.jpeg";
import atul2 from "../images/atul2.jpeg";
import atul3 from "../images/atul3.jpeg";
import atul4 from "../images/atul4.jpeg";
import atul5 from "../images/atul5.jpeg";
import atul6 from "../images/atul6.jpeg";
import atul7 from "../images/atul7.jpeg";
import atul9 from "../images/atul9.jpeg";
import atul10 from "../images/atul10.jpeg";
import atul11 from "../images/atul11.jpeg";
import atul12 from "../images/atul12.jpeg";
import atul8 from "../images/atul8.jpeg";
import videos1 from "../images/videos1.mp4";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  CardGroup,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Packages = () => {

  const Navigate = useNavigate();
  return (
    <>
      <div
        className="content"
        style={{ background: "tomato", borderRadius: "5px" }}
      >
        <h4>Choose Your Packages</h4>
        <h1 style={{ fontFamily: "cursive" }}>
          Select Your Best Packages <br /> For Your Shoot
        </h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="packages">
              <div>
                <Card style={{ border: "none" }}>
                  <Card.Img variant="top" src={photo2} />
                  <Card.Title>RS.15999/- (Full Day)</Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <div>
                        <h3
                        onClick={() => Navigate("/fullDay")}
                          style={{
                            fontFamily: "serif",
                            color: "tomato",
                            cursor: "pointer",
                          }}
                        >
                          Sunrise To Sunset Package
                        </h3>
                      </div>
                      <div className="terms_conditions">
                        <ul>
                          <li>Timing:- 9AM to 8PM</li>
                          <li>One Changing Room.</li>
                          <li>
                            Assistant Staff for help and other guidance on sets.
                          </li>
                          <li>All sets for shoot</li>
                          <li>All props can be used for shoot</li>
                          <li>No other Hidden Charges.</li>
                          <li>
                            Read all the Terms and Conditions before making
                            payment.
                          </li>
                          <li>
                            Only 8 people are Allowed including couple. (Shoot
                            shall be done only of couple)
                          </li>
                          <li>
                            The pack up time has to be exactly as per booking of
                            slot.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button className="book_now" onClick={()=>Navigate("/fullDay")}>Book Now</button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* second colums start */}
            <Col className="packages">
              <div>
                <Card style={{ border: "none" }}>
                  <Card.Img variant="top" src={atul4} />
                  <Card.Title>RS.9999/- (Half Day)</Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <div>
                        <h3 onClick={() => Navigate("/halfDay")}
                          style={{
                            fontFamily: "serif",
                            color: "tomato",
                            cursor: "pointer",
                          }}
                        >
                          Mini Package
                        </h3>
                      </div>
                      <div className="terms_conditions">
                        <ul>
                          <li>Any 5 hrs of day</li>
                          <li>Morning (9 AM to 2 PM) or (3 PM to 8 PM)</li>
                          <li>One Changing Room.</li>
                          <li>
                            Assistant Staff for help and other guidance on sets.
                          </li>
                          <li>All sets for shoot</li>
                          <li>All props can be used for shoot</li>
                          <li>No other Hidden Charges.</li>
                          <li>
                            Read all the Terms and Conditions before making
                            payment.
                          </li>
                          <li>
                            Only 8 people are Allowed including couple. (Shoot
                            shall be done only of couple)
                          </li>
                          <li>
                            The pack up time has to be exactly as per booking of
                            slot.
                          </li>
                        </ul>
                      </div>
                      <div>
                         <button className="book_now" onClick={()=>Navigate("/halfDay")}>Book Now</button>
                        
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <img src={photo9} alt="" style={{ width: "100%" }} />
      </div>
      <div className="constumes">
        <h1>
          We Have Best Constumes <br /> For Your Prewedding
        </h1>
      </div>

      <div>
        <CardGroup>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo1} />
            <Card.Title>RS.1500/-</Card.Title>
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul12} />
            <Card.Title>RS.2500/-</Card.Title>
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo2} />
            <Card.Title>RS.1000/-</Card.Title>
          </Card>
        </CardGroup>
      </div>

      <div>
        <CardGroup>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul4} />
            <Card.Title>RS.1500/-</Card.Title>
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo8} />
            <Card.Title>RS.2500/-</Card.Title>
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul11} />
            <Card.Title>RS.1000/-</Card.Title>
          </Card>
        </CardGroup>
      </div>
      {/* <div>
        <div>
          <h1>Take Snap-Shot Tour</h1>
        </div>
        <div>
          <video src={videos1} controls="autoplay"></video>
        </div>
      </div> */}
      <div>
        <Card className="bg-dark text-white">
          {/* <Card.ImgOverlay>
        <Card.Title>PreWedding Dreams </Card.Title>
      </Card.ImgOverlay> */}
          <video src={videos1} controls="autoplay" />
        </Card>
      </div>

      <div className="mesmerising">
        <h3>Snap-Shot</h3>
        <h1>Mesmerising Set</h1>
      </div>

      <div className="group_photo">
        <CardGroup>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul4} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo2} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul5} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo3} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo7} />
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo4} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul1} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo5} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul6} />
          </Card>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo6} />
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup>
          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={atul6} />
          </Card>

          <Card className="mesmririse_photo" style={{ border: "none" }}>
            <Card.Img variant="top" src={photo5} />
          </Card>
        </CardGroup>
      </div>
      
    </>
  );
};

export default Packages;
