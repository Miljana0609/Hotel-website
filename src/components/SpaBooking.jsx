import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SpaBooking() {

const { id } = useParams();

const [date, setDate] = useState(null);
const [time, setTime] = useState("");
const navigate = useNavigate();
const [persons, setPersons] = useState(1);
const [errors, setErrors] = useState({});

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+46|0)[0-9]{9}$/;

const handleBooking = () => {

  let newErrors = {}
  
  if(!date){
  newErrors.date = "Välj datum"
  }
  
  if(!time){
  newErrors.time = "Välj tid"
  }
  
  if(!name){
  newErrors.name = "Ange ditt namn"
  }
  
  if(!emailRegex.test(email)){
  newErrors.email = "Ogiltig email"
  }
  
  if(!phoneRegex.test(phone)){
  newErrors.phone = "Ogiltigt mobilnummer"
  }
  
  setErrors(newErrors)
  
  if(Object.keys(newErrors).length > 0){
  return
  }
  
  navigate("/booking-confirmation", {
  state:{
  name,
  email,
  phone,
  date,
  time,
  persons
  }
  })
};

return (

<div className="container" style={{marginTop:"100px"}}>

<h2>Boka behandling</h2>

<div className="mb-3">

<label>Datum</label>

<DatePicker
selected={date}
onChange={(d)=>setDate(d)}
minDate={new Date()}
/>

</div>

<div className="mb-3">

<label>Tid</label>

<select
value={time}
onChange={(e)=>setTime(e.target.value)}
>

<option value="">Välj tid</option>
<option>10:00</option>
<option>11:00</option>
<option>12:00</option>
<option>13:00</option>
<option>14:00</option>
<option>15:00</option>

</select>

</div>

<div className="mb-3">

<label>Antal personer</label>

<select
value={persons}
onChange={(e)=>setPersons(e.target.value)}
>

<option>1</option>
<option>2</option>
<option>3</option>

</select>

</div>

<div className="mb-3">

<label>Namn</label>

<input
className="form-control"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
{errors.name && <p className="form-error">{errors.name}</p>}

</div>
<div className="mb-3">

<label>Mobilnummer</label>

<input
type="tel"
className="form-control"
placeholder="070 123 45 67"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>
{errors.phone && <p className="form-error">{errors.phone}</p>}

</div>

<div className="mb-3">

<label>Email</label>

<input
className="form-control"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
{errors.email && <p className="form-error">{errors.email}</p>}

</div>

<button
className="btn btn-dark"
onClick={handleBooking}
>

Bekräfta bokning

</button>

</div>

);

}

export default SpaBooking;