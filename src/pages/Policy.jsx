import React from "react";
import Hero from "../components/Hero";

function Policy() {
  return (
    <div>

      <Hero
        title="Integritetspolicy"
        subtitle="Så hanterar vi dina personuppgifter"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mt-5" style={{ maxWidth: "900px" }}>

        <h2>Din integritet är viktig för oss</h2>

        <p>
          På City Comfort Hotel värnar vi om din personliga integritet.
          Denna integritetspolicy förklarar hur vi samlar in, använder
          och skyddar dina personuppgifter när du använder vår webbplats
          eller gör en bokning hos oss.
        </p>

        <h3 className="mt-4">Vilka uppgifter vi samlar in</h3>

        <p>
          När du gör en bokning kan vi samla in följande information:
        </p>

        <ul>
          <li>Namn</li>
          <li>E-postadress</li>
          <li>Telefonnummer</li>
          <li>Bokningsinformation</li>
        </ul>

        <h3 className="mt-4">Hur vi använder dina uppgifter</h3>

        <p>
          Informationen används för att:
        </p>

        <ul>
          <li>Hantera din bokning</li>
          <li>Kontakta dig vid frågor om din vistelse</li>
          <li>Förbättra våra tjänster och kundupplevelsen</li>
        </ul>

        <h3 className="mt-4">Skydd av personuppgifter</h3>

        <p>
          Vi behandlar dina personuppgifter i enlighet med gällande
          dataskyddslagstiftning och delar inte dina uppgifter med
          tredje part utan ditt samtycke, om det inte krävs enligt lag.
        </p>

        <h3 className="mt-4">Cookies</h3>

        <p>
          Vår webbplats använder cookies för att förbättra funktionalitet
          och användarupplevelse. Cookies hjälper oss även att analysera
          hur webbplatsen används.
        </p>

        <h3 className="mt-4">Kontakt</h3>

        <p>
          Om du har frågor om hur vi hanterar personuppgifter kan du
          kontakta oss:
        </p>

        <p>
          📧 privacy@citycomfort.se
        </p>

      </div>

    </div>
  );
}

export default Policy;