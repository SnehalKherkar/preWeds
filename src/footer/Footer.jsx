import React from "react";
import "./footer.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const Phonenumber = "9012345678";
  const email1 ="snapShotpune@gmail.com";
  const Navigate = useNavigate();
  

  const handleWhatsAppClick1 = () => {
    window.open(`https://web.whatsapp.com/send?phone=${Phonenumber}`, '_blank');
};

const handleClickEmail1 = () => {
  window.location.href = `mailto:${email1}`;
};

const handleClickCall = () => {
  window.location.href = `tel:${Phonenumber}`;
}; 


const facebook1 = "https://www.facebook.com/"
const handleFacebook1 =()=>{
  window.open(facebook1)
};

 const insta = "https://www.instagram.com/"
 const handleInsta = () => {
  window.open(insta);
 };

  return (
    <div className="containe">
      <div>
        <Container className="footer">
          <Row>
            <Col>
              {" "}
              <img
                className="logo_image"
                src="data:image/png;base64,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"
                style={{ width: "130px" }}
              />
              <h4>Follow Us:</h4>
              <div>
                <BsInstagram className="icons_follow" onClick={handleInsta} />
              <BsFacebook className="icons_follow" onClick={handleFacebook1} /> 
                <BsWhatsapp className="icons_follow" onClick={handleWhatsAppClick1} />
              </div>
            </Col>
            <Col>
              <div className="second_row">
                <h2>Contact Us:</h2>
                <div className="contact_call">
                  <BsTelephone onClick={handleClickCall} style={{cursor:"pointer"}} />
                  <h6>9012345678</h6>
                </div>
                <div className="contact_call">
                  <BsEnvelope onClick={handleClickEmail1} style={{cursor:"pointer"}} />
                  <h6 >snapShotpune@gmail.com</h6>
                </div>
                <div className="contact_call">
                  <BsGeoAlt />
                  <h6>Snap Shot behind Thanda Mala,Aundh-411039</h6>
                </div>
              </div>
            </Col>
            <Col>
            <div className="policy">
            <h2>Policy:</h2>
            <Button variant="secondary" className="policy_button" onClick={()=>Navigate("/privacy")} >Privacy Policy</Button> <br />
            <Button variant="secondary" className="policy_button" onClick={()=>Navigate("/cancelation")}>Cancel Policy</Button> <br />
            <Button variant="secondary" className="policy_button" onClick={()=>Navigate("/refund")}>Refund Policy</Button> 
            
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
