import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Room({ room, nights, onShow }) {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = nights ? room.price * nights : room.price;


const params = new URLSearchParams(location.search);

  const bookRoom = () => {

    const search = window.location.search;

    if (!search.includes("checkin")) {
      alert("Välj datum och antal gäster först");
      navigate("/");
      return;
    }
  
    navigate("/book/" + room._id + search);
  };

  return (
    <div className="room-card">
      <img src={room.imageurls[0]} className="room-image" alt={room.name} />

      <div className="room-info">
        <h3>{room.name}</h3>
        <p>
          <strong>{totalPrice} kr</strong>
          <br />
          <span style={{ fontSize: "14px", color: "gray" }}>
            {room.price} kr / natt {nights ? `· ${nights} nätter` : ""}
          </span>
        </p>

        <button className="btn btn-dark" onClick={onShow}>
          Visa mer
        </button>
        <button className="btn btn-success" onClick={bookRoom}>
          Boka rum
        </button>
      </div>
    </div>
  );
}