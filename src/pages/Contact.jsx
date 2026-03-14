import React from "react";
import Hero from "../components/Hero";

function Contact() {
  return (
    <div>

      <Hero
        title="Kontakt"
        subtitle="Har du frågor? Vi hjälper dig gärna."
        image="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mt-5" style={{maxWidth:"900px"}}>

        <h2>City Comfort Hotel</h2>

        <p>
          Har du frågor om din bokning eller vill veta mer om våra rum,
          restaurang eller spa? Kontakta oss gärna – vi finns här för att hjälpa dig.
        </p>

        <h3 className="mt-4">Kontaktuppgifter</h3>

        <p>📍 Karlstad, Sverige</p>
        <p>📞 +46 123 456 789</p>
        <p>✉ info@citycomfort.se</p>

        <h3 className="mt-4">Reception</h3>

        <p>Receptionen är öppen dygnet runt.</p>
        <p>Incheckning från kl. 15:00</p>
        <p>Utcheckning senast kl. 11:00</p>

        <h3 className="mt-4">Kontaktpersoner</h3>

        <p><strong>Anna Svensson</strong> – Hotel Manager</p>
        <p>📧 anna@citycomfort.se</p>

        <p><strong>Erik Larsson</strong> – Reception Manager</p>
        <p>📧 erik@citycomfort.se</p>

        <p><strong>Sofia Nilsson</strong> – Spa & Wellness Manager</p>
        <p>📧 spa@citycomfort.se</p>

      </div>

    </div>
  );
}

export default Contact;