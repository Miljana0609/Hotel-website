import { useState } from "react"

const images = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
]

function RestaurantPreview(){

const [index,setIndex] = useState(0)

const next = () => {
setIndex((index + 1) % images.length)
}

const prev = () => {
setIndex((index - 1 + images.length) % images.length)
}

return(

<section className="restaurant-preview section-light">

<div className="container preview-grid">

<div>

<h2>Restaurang</h2>

<p>
Vår restaurang erbjuder moderna rätter inspirerade av
lokala råvaror i en avslappnad och stilfull miljö.
</p>
</div>
<div className="image-slider">

<img src={images[index]} alt="restaurant"/>


<button className="arrow left" onClick={prev}>
←
</button>

<button className="arrow right" onClick={next}>
→
</button>

</div>

</div>

</section>

)

}

export default RestaurantPreview