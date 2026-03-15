import { useParams } from "react-router-dom";
import { useState } from "react";

function BookRoom() {

  const { roomid } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {

if(!name){
  alert("Ange ditt namn");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){
  alert("Ange en giltig email");
  return;
}

const phoneRegex = /^(\+46|0)[0-9]{9}$/;

if(!phoneRegex.test(phone)){
  alert("Ange ett giltigt mobilnummer");
  return;
}

    const booking = {
    roomId: roomid,
    name: name,
    email: email,
    phone: phone,
    date: new Date().toISOString()
    }
    
    const existing = JSON.parse(localStorage.getItem("bookings")) || []
    
    existing.push(booking)
    
    localStorage.setItem("bookings", JSON.stringify(existing))
    
    alert("Bokningen är bekräftad!")
  };

  return (

    <div className="container" style={{marginTop:"100px"}}>

      <h2>Boka rum</h2>

      <form>

        <div className="mb-3">
          <label>Namn</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Telefon</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>

        <p>
          Betalning sker vid ankomst på hotellet.
        </p>

        <button
          type="button"
          className="btn btn-dark"
          onClick={handleBooking}
        >
          Bekräfta bokning
        </button>

      </form>

    </div>

  );

}

export default BookRoom;