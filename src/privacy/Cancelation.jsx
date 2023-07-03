import React from "react";
import Footer from "../footer/Footer";

const Cancelation = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div>
        <h2>CANCELLATION POLICY:</h2>
        <ul>
          <li>
            Cancellations will be considered only if the cancellation request is
            emailed at snapcityinpune@gmail.com within 6 hours of placing an
            order.
          </li>
          <li>
            Any cancellation on booking, prior to 15 days from shoot date will
            be non-refundable.
          </li>
          <li>
            However, in a case where a transaction has been completed by you on
            the Site, and money has been charged to your card or bank account
            but a booking confirmation email is not delivered within 24 hours of
            your completion of the transaction then you may inform us by sending
            us an email on snapcityinpune@gmail.com In such a scenario, we shall
            verify the transaction and send you the confirmation within one
            working day.
          </li>
          <li>
            In Case of cancellation before one month of schedule date, the guest
            shall be refunded within one month from date of cancellation. The
            booking amount after deducting therefrom such expenses as incurred
            by the management for the booking event. Government charges or
            payment gateway charges (e-Payment charges) are not refundable on
            cancellation of bookings.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Cancelation;
