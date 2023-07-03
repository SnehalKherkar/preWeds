import React from "react";
import Footer from "../footer/Footer";

const Refund = () => {
  return (
    <div style={{backgroundColor:"black",color:"white"}}>
      <div>
        <h3>REFUND POLICY:</h3>
        <li>
          The booking amount paid at the time of booking is non-refundable. In
          case, after booking you decide not to avail the services, you can
          email us at snapcityinpune@gmail.com and the balance amount will be
          waved off.
        </li>
        <li>
          You cannot reschedule the shoot date after the confirmation of
          booking.
        </li>
        <li>
          In case, if the studio is closed on the day of the shoot due to some
          unavoidable situations, we can reschedule your shoot to a mutually
          convenient date.
        </li>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
