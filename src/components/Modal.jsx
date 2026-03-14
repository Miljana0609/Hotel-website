import React from "react";
import "../css/modal.css";


export default function RoomModal({ show, onClose, room, imageIndex, nextImage, prevImage }) {
  if (!show || !room) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>{room.name}</h2>
        <img src={room.imageurls[imageIndex]} className="modal-image" alt={room.name} />
        
        <div className="slider-buttons">
          <button onClick={prevImage}>⬅</button>
          <button onClick={nextImage}>➡</button>
        </div>

        <p>{room.description}</p>

        <h4>Bekvämligheter</h4>
        <ul>
          {room.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <button className="btn btn-danger" onClick={onClose}>
          Stäng
        </button>
      </div>
    </div>
  );
}