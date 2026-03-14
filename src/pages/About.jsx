import React from "react";
import Hero from "../components/Hero";


function About() {
  return (
    <div>

      <Hero
        title="Om City Comfort Hotel"
        subtitle="En plats för komfort, avkoppling och minnesvärda upplevelser."
        image="https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=2128&auto=format&fit=crop"
      />

      <div className="container mt-5" style={{maxWidth: "900px"}}>

        <h2>Vår historia</h2>
        <p>
          City Comfort Hotel är ett modernt boutiquehotell beläget i hjärtat av Karlstad.
          Vårt mål är att erbjuda en perfekt kombination av stil, komfort och personlig service.
          Oavsett om du reser i affärer eller för nöje vill vi att varje gäst ska känna sig som hemma.
        </p>

        <p>
          Hotellet öppnade sina dörrar med visionen att skapa en varm och välkomnande
          atmosfär där gäster kan koppla av efter en lång resa eller en dag fylld av upplevelser.
          Våra rum är designade med fokus på komfort och modern skandinavisk design.
        </p>

        <h2 className="mt-4">Vad vi erbjuder</h2>

        <ul>
          <li>Stilfulla och bekväma hotellrum</li>
          <li>Restaurang med lokala och internationella smaker</li>
          <li>Spa och avkopplande behandlingar</li>
          <li>Gratis wifi i hela hotellet</li>
          <li>24-timmars reception</li>
        </ul>

        <h2 className="mt-4">Vårt team</h2>

        <p>
          På City Comfort Hotel arbetar ett engagerat team på cirka 25 medarbetare
          inom reception, restaurang, spa och housekeeping. 
          Vårt fokus är att ge varje gäst en personlig och minnesvärd upplevelse.
        </p>

        <p>
          Vi ser fram emot att välkomna dig till City Comfort Hotel – 
          din oas av komfort mitt i staden.
        </p>

      </div>

    </div>
  );
}

export default About;