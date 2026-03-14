
import { useState } from "react"

const spaImages = [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881"
    ]
function SpaPreview(){

const [index,setIndex] = useState(0)

const next = () => {
setIndex((index + 1) % spaImages.length)
}

const prev = () => {
setIndex((index - 1 + spaImages.length) % spaImages.length)
}

return(

    <section className="spa-preview section-white">

<div className="container preview-grid">

<div>

<h2>Spa & Wellness</h2>

<p>
Koppla av i vårt spa med massage, bastu och
avslappnande behandlingar.
</p>

</div>

<div className="image-slider">

<img src={spaImages[index]} alt="spa"/>

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

export default SpaPreview