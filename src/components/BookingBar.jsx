import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function BookingBar() {

  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAge, setChildAge] = useState(1);


  const today = new Date();
  const navigate = useNavigate();

  const searchRooms = () => {

    if (!checkin || !checkout) {
      alert("Välj datum");
      return;
    }

    const params = new URLSearchParams({

      checkin: checkin.toISOString(),
      checkout: checkout.toISOString(),
      adults: adults,
      children: children,
      childAge: children > 0 ? childAge : ""

    });

    navigate("/rooms?" + params.toString());

  };

  const getNights = () => {

    if (!checkin || !checkout) return 0;

    const diff = checkout.getTime() - checkin.getTime();

    const nights = diff / (1000 * 60 * 60 * 24);

    return nights;

  };

  return (

    <div className="booking-container">

      <div className="date-box">

        <p>CHECK IN</p>

        <DatePicker
          selected={checkin}
          onChange={(date) => setCheckin(date)}
          minDate={today}
          dateFormat="dd MMM"
          placeholderText="Välj datum"
        />

      </div>

      <div className="date-box">

        <p>CHECK UT</p>

        <DatePicker
          selected={checkout}
          onChange={(date) => setCheckout(date)}
          minDate={checkin || today}
          dateFormat="dd MMM"
          placeholderText="Välj datum"
        />

      </div>
      <div className="guest-box">

        <p>VUXNA</p>

        <div className="guest-stepper">

          <button
            onClick={() => setAdults(Math.max(1, adults - 1))}
          >
            −
          </button>

          <span>{adults}</span>

          <button
            onClick={() => setAdults(Math.min(4, adults + 1))}
          >
            +
          </button>

        </div>

      </div>
      <div className="guest-box">

        <p>BARN</p>

        <div className="guest-stepper">

          <button
            onClick={() => setChildren(Math.max(0, children - 1))}
          >
            −
          </button>

          <span>{children}</span>

          <button
            onClick={() => setChildren(Math.min(3, children + 1))}
          >
            +
          </button>
        </div>
      </div>

      {children > 0 && (

        <div className="guest-box">

          <p>BARNETS ÅLDER</p>

          <select
            value={childAge}
            onChange={(e) => setChildAge(Number(e.target.value))}
          >

            <option value="0">0-1 år</option>
            <option value="2">2-3 år</option>
            <option value="4">4-6 år</option>
            <option value="7">7-12 år</option>

          </select>

        </div>

      )}

      <button
        className="search-btn"
        onClick={searchRooms}
      >
        SÖK
      </button>

      {getNights() > 0 && (

        <p className="nights-text">
          {getNights()} nätter
        </p>

      )}

    </div>

  );

}

export default BookingBar;

