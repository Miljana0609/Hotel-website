import { useLocation } from "react-router-dom";

function BookingConfirmation(){

const { state } = useLocation()

return(

<div className="container" style={{marginTop:"120px"}}>

<h2>Tack för din bokning!</h2>

<p>Vi har tagit emot din bokning.</p>

<div className="booking-summary">

<p><strong>Namn:</strong> {state?.name}</p>
<p><strong>Email:</strong> {state?.email}</p>
<p><strong>Telefon:</strong> {state?.phone}</p>

{state?.date && (
<p><strong>Datum:</strong> {new Date(state.date).toLocaleDateString()}</p>
)}

{state?.time && (
<p><strong>Tid:</strong> {state.time}</p>
)}

</div>

</div>

)

}

export default BookingConfirmation