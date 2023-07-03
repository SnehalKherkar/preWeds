import React, { useEffect, useState } from "react";
import "./fullDay.css";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";
import atul4 from "../images/atul4.jpeg";
// import Header from "../HeaderFirst/Header";
import Footer from "../footer/Footer";
import { BsClockHistory } from "react-icons/bs";
const FullDay = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []);

  let package_price = 15999;
  let serviceFee = 500;
  let booking_price = 5999;
  const [makeup_artist_package, set_makeup_artist_package] = useState(0);
  const [NumberOfPerson, setNumberOfPerson] = useState(8);
  const [payabelAmount, setPayabelAmount] = useState(
    package_price + serviceFee
  );
  const [RemainingAmount, setRemainingAmount] = useState(
    package_price - booking_price
  );


  let numberOfPersonsAmount = 0;
  switch (NumberOfPerson) {
    case "9":
      numberOfPersonsAmount = 500;
      break;
    case "10":
      numberOfPersonsAmount = 1000;
      break;
    case "11":
      numberOfPersonsAmount = 1500;
      break;
    case "12":
      numberOfPersonsAmount = 2000;
      break;
    case "13":
      numberOfPersonsAmount = 2500;
      break;
    default:
      numberOfPersonsAmount = 0;
  }
  const claculation = () => {
   
    setPayabelAmount(package_price + serviceFee + makeup_artist_package + numberOfPersonsAmount);
  };
  const [key, setKey] = useState("home");
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* <Header/> */}
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <div>
                <img src={atul4} alt="" style={{ width: "100%" }} />
              </div>
              <div>
                <h1>Sunrise To sunset Package</h1>
                <hr />
              </div>
              <div>
                <h4>
                  {" "}
                  <BsClockHistory /> Duration
                </h4>
                <h6 style={{ marginLeft: "35px" }}>Full Day</h6>
                <hr />
              </div>
              <div className="tab-buttons">
                <button
                  className="information_btn"
                  onClick={() => handleTabSelect("tab1")}
                >
                  Information
                </button>
                <button
                  className="information_btn"
                  onClick={() => handleTabSelect("tab2")}
                >
                  Add MakeUp Artist
                </button>
              </div>
              <Tabs activeKey={activeTab} onSelect={handleTabSelect}>
                <Tab eventKey="tab1">
                  <div>
                    <h1>Highlight</h1>
                  </div>
                  <div>
                    <ul>
                      <li>Timing:-9 AM to 8 PM</li>
                      <li>One Changing Room.</li>
                      <li>
                        Assistant Staff for help and other guidance on sets.
                      </li>
                      <li>All sets for shoot</li>
                      <li>All props can be used for shoot.</li>
                      <li>No other Hidden Charges.</li>
                      <li>
                        Read all the Terms and Conditions before making payment.
                      </li>
                      <li>
                        Only 8 people are Allowed including couple. (Shoot shall
                        be done only of couple)
                      </li>
                      <li>
                        The pack up time has to be exactly as per booking of
                        slot.
                      </li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="tab2">
                  <div>
                    <h2>Add Make Up Artist</h2>
                  </div>
                  <div>
                    <h2>Golden Make Up Package</h2>
                    <h5>Rs.4999/-</h5>
                    <button
                      className="information_btn"
                      onClick={() => {
                        set_makeup_artist_package(4999);
                        claculation();
                      }}
                    >
                      Add MakeUp Artist
                    </button>
                  </div>
                  <div>
                    <ul>
                      <li>Unlimited Looks (Female)</li>
                      <li>Hair Styling</li>
                      <li>Styling</li>
                      <li>Draping</li>
                      <li>Touch-up after every 2 hours</li>
                    </ul>
                  </div>
                  <div>
                    <h2>Platinum MakeUp Package</h2>
                    <h5>Rs.2999/-</h5>
                    <button
                      className="information_btn"
                      onClick={() => {
                        claculation();
                        set_makeup_artist_package(2999);
                      }}
                    >
                      Add MakeUp Artist
                    </button>
                  </div>
                  <div>
                    <ul>
                      <li>3 looks (1 Complimentary look from our side).</li>
                      <li>Hair Styling</li>
                      <li>Draping</li>
                      <li>Touch-up after every 2 hours</li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>
            </Col>

            <Col sm={4}>
              <div>
                <form action="">
                  <div>
                    <h1>Book this Package</h1>
                  </div>
                  <div>
                    <input
                      className="information_btn"
                      type="text"
                      placeholder="Your Full Name"
                      style={{ marginTop: "10px" }}
                    />
                    <input
                      className="information_btn"
                      type="email"
                      placeholder="Your Email Id"
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="">
                      <h6 style={{ marginTop: "10px" }}>
                        *Please Enter your Whatsapp Number
                      </h6>
                    </label>
                    <p>for Booking Details</p>
                    <input
                      className="information_btn"
                      type="number"
                      placeholder="Enter Your Whatsapp Number"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="information_btn"
                      type="date"
                      style={{ marginTop: "30px" }}
                    />
                    <p style={{ color: "blue", fontFamily: "cursive" }}>
                      Hurry up...Only 4 booking slot are left !!!
                    </p>
                  </div>
                  <div>
                    <label htmlFor="" style={{ marginTop: "30px" }}>
                      Add extra Person (Till 8 person its free)
                    </label>
                    <select
                     onClick={(e) => {
                      setNumberOfPerson(e.target.value);
                      claculation();
                    }}
                      
                      className="information_btn"
                      name="extra"
                      id="extra"
                    >
                      <option value="8Adults">
                        8 Adults (Include Into Package)
                      </option>
                      <option value="9">9 Adults (rs.500)</option>
                      <option value="10">10 Adults (rs.1000)</option>
                      <option value="11">11 Adults (rs.1500)</option>
                      <option value="12">12 Adults (rs.2000)</option>
                      <option value="13">13 Adults (rs.2500)</option>
                    </select>
                  </div>
                  <div style={{ borderBottom: "1px solid black" }}>
                    <h4 style={{ marginTop: "30px" }}>Fare Details</h4>
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <div className="first_book" style={{ display: "flex" }}>
                      <h6>Package Price:</h6>
                      <h6 style={{ marginLeft: "150px" }}>
                        Rs.{package_price}
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <div style={{ marginTop: "30px" }}>
                    <div className="first_book" style={{ display: "flex" }}>
                      <h6>Booking Price:</h6>
                      <h6 style={{ marginLeft: "150px" }}>
                        Rs.{booking_price}
                      </h6>
                    </div>
                    <div className="first_book" style={{ display: "flex" }}>
                      <h6>Remaining Amount:</h6>
                      <h6 style={{ marginLeft: "110px" }}>
                        Rs.{RemainingAmount}
                      </h6>
                    </div>
                    <p>
                      (Remaining amount shall be paid 2 days before shoot date.)
                    </p>
                  </div>
                  <hr />
                  <div style={{ marginTop: "30px" }}>
                    <div className="first_book" style={{ display: "flex" }}>
                      <h6>Total Price:</h6>
                      <h6 style={{ marginLeft: "175px" }}>
                        Rs.{package_price}
                      </h6>
                    </div>
                    {makeup_artist_package > 0 ? (
                      <div className="first_book" style={{ display: "flex" }}>
                        <h6>Makeup Artist :</h6>
                        <h6 style={{ marginLeft: "142px" }}>
                          Rs.{makeup_artist_package}
                        </h6>
                      </div>
                    ) : null}
                    {numberOfPersonsAmount > 0 ? (
                      <div className="first_book" style={{ display: "flex" }}>
                        <h6>Extra Person:</h6>
                        <h6 style={{ marginLeft: "160px" }}>
                          Rs.{numberOfPersonsAmount}
                        </h6>
                      </div>) : null}
                   
                    <div className="first_book" style={{ display: "flex" }}>
                      <h6>Service Fee:</h6>
                      <h6 style={{ marginLeft: "168px" }}>Rs.{serviceFee}</h6>
                    </div>
                    <div className="first_book" style={{ display: "flex" }}>
                      <h6>Payabel Amount:</h6>
                      <h6 style={{ marginLeft: "130px" }}>
                        Rs.{payabelAmount}
                      </h6>
                    </div>
                    <p>
                      (Remaining amount shall be paid 2 days before shoot date.)
                    </p>
                  </div>
                  <hr />
                  <div>
                    <input type="checkbox" />
                    By checking this box, you agree to be all terms and
                    condition for our products and services.
                    <a href="">Terms and Conditions</a>
                  </div>
                  <button
                    type="submit"
                    className="information_btn"
                    style={{ marginTop: "30px" }}
                    
                  >
                    Pay Now Rs.{payabelAmount}
                  </button>
                  <p>(Minimum ₹ 6499 amount need to pay for booking.)</p>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default FullDay;
