import { useParams } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SpaBooking() {

const { id } = useParams();

const [date, setDate] = useState(null);
const [time, setTime] = useState("");
const [persons, setPersons] = useState(1);

const [name, setName] = useState("");
const [email, setEmail] = useState("");

const handleBooking = () => {

if(!date || !time){
  alert("Välj datum och tid");
  return;
}

alert("Spa-bokning skickad!");

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

</div>

<div className="mb-3">

<label>Email</label>

<input
className="form-control"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

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