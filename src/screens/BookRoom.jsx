import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookRoom() {

  const { roomid } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleBooking = () => {

    let newErrors = {}
    
    if(!name){
    newErrors.name = "Ange ditt namn"
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailRegex.test(email)){
    newErrors.email = "Ogiltig email"
    }
    
    const phoneRegex = /^(\+46|0)[0-9]{9}$/;
    
    if(!phoneRegex.test(phone)){
    newErrors.phone = "Ogiltigt mobilnummer"
    }
    
    setErrors(newErrors)
    
    if(Object.keys(newErrors).length > 0){
    return
    }
    
    const booking = {
    roomId: roomid,
    name,
    email,
    phone
    }
    
    navigate("/booking-confirmation", {
    state: booking
    })
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
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="mb-3">
          <label>Telefon</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
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