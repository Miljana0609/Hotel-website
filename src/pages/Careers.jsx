import React from "react";
import Hero from "../components/Hero";

function Careers() {
  return (
    <div>

      <Hero
        title="Jobba hos oss"
        subtitle="Bli en del av teamet på City Comfort Hotel"
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mt-5" style={{ maxWidth: "900px" }}>

        <h2>Arbeta hos City Comfort Hotel</h2>

        <p>
          På City Comfort Hotel strävar vi efter att skapa en varm,
          professionell och välkomnande miljö för både våra gäster
          och våra medarbetare.
        </p>

        <p>
          Vårt team består av engagerade personer inom reception,
          restaurang, spa och housekeeping som alla delar samma mål –
          att ge våra gäster en fantastisk hotellupplevelse.
        </p>

        <h2 className="mt-4">Vårt team</h2>

        <p>
          Idag arbetar cirka 25 personer på City Comfort Hotel.
          Vi är ett internationellt och serviceinriktat team som
          brinner för hotellbranschen och för att ge gästerna
          bästa möjliga service.
        </p>

        <h2 className="mt-4">Lediga tjänster</h2>

        <p>
          För tillfället har vi inga lediga tjänster annonserade,
          men vi tar gärna emot spontanansökningar.
        </p>

        <h2 className="mt-4">Skicka din ansökan</h2>

        <p>
          Är du intresserad av att arbeta hos oss?
        </p>

        <p>
          Skicka ditt CV och ett kort personligt brev till:
        </p>

        <p>
          <strong>jobb@citycomfort.se</strong>
        </p>

        <p>
          Vi kontaktar dig om en tjänst som passar din profil blir tillgänglig.
        </p>

      </div>

    </div>
  );
}

export default Careers;