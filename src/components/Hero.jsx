import React from "react";

function Hero({ title, subtitle, image }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${image})`
      }}
    >
      <div className="hero-overlay">

        <h1 className="hero-title">{title}</h1>

        <p className="hero-subtitle">{subtitle}</p>

      </div>
    </div>
  );
}

export default Hero;