import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

function SpaScreen() {

  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    const fetchTreatments = async () => {

      try {

        setLoading(true);

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/spa`);

        setTreatments(res.data.treatments);

        setLoading(false);

      } catch (err) {

        setError("Kunde inte hämta behandlingar");
        setLoading(false);

      }

    };

    fetchTreatments();

  }, []);

  return (

    <div className="spa-container">


  <Hero
    title="Spa & Wellness"
    subtitle="Koppla av kropp och själ i vår spa-oas"
    image="https://plus.unsplash.com/premium_photo-1679430888155-43b6c7657a2c"
  />

      {/* TREATMENTS */}

      <div className="treatments-section">

        <h2>Våra Behandlingar</h2>

        {loading && <h3>Laddar...</h3>}
        {error && <h3>{error}</h3>}

        <div className="treatments-grid">

          {treatments.map((t) => (

            <div key={t._id} className="treatment-card">

              <h3>
                {t.name}
                {t.forTwo && <span className="badge">För två</span>}
              </h3>

              <p>{t.description}</p>

              <div className="card-footer">

                <span>⏱ {t.duration}</span>
                <span>{t.price} kr</span>

              </div>

              <button className="book-btn"
              onClick={() => navigate("/spa-book/" + t._id)}
              >
                Boka
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default SpaScreen;