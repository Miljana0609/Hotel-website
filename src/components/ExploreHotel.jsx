import { Link } from "react-router-dom"

function ExploreHotel(){

return(

<section className="explore-hotel section-light">

<div className="container">

<h2>Upptäck hotellet</h2>

<div className="explore-grid">

<Link to="/roomm" className="explore-card">
<img src="https://images.unsplash.com/photo-1631049035182-249067d7618e"/>
<h3>Rum</h3>
</Link>

<Link to="/food" className="explore-card">
<img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"/>
<h3>Restaurang</h3>
</Link>

<Link to="/spa" className="explore-card">
<img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"/>
<h3>Spa & Wellness</h3>
</Link>

</div>

</div>

</section>

)

}

export default ExploreHotel