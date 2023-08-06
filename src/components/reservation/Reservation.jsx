import "./Reservation.css";
import ReservationForm from "./ReservationForm";

function Reservation() {
  return (
    <div className="reservation-wrapper">
      <div className="reservation-container global-max-width">
        <div className="reservation-text">
          <h2>Enjoy beautiful scenary and delicious cusine.</h2>
          <p>
            Reserve a table for your party. We have various table options to fit all your family and friends.
          </p>
          
        </div>
        <div className="reservation-form">
          <h1>Reserve a Table</h1>
          <p>
            Please provide the below info to book your table.
          </p>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
