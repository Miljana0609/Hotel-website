import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Room from "../components/Room";
import Modal from "../components/Modal";
import Hero from "../components/Hero";


export default function RoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const checkinParam = params.get("checkin");
  const checkoutParam = params.get("checkout");

  const checkin = checkinParam ? new Date(checkinParam) : null;
  const checkout = checkoutParam ? new Date(checkoutParam) : null;

  const adults = Number(params.get("adults")) || 1;
const children = Number(params.get("children")) || 0;

const guests = adults + children;

  const nights =
    checkin && checkout
      ? Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24))
      : 1;

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/rooms/getallrooms`);
        setRooms(res.data.rooms);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const filteredRooms = rooms.filter((room) => {
    if (guests <= 2) return true;
    if (guests >= 3) {
      return ["superior", "superior-balcony", "suite"].includes(room.type);
    }
    return true;
  });
  const order = [
    "standard",
    "premium",
    "superior",
    "superior-balcony",
    "suite"
  ];
  const sortedRooms = [...filteredRooms].sort(
    (a, b) => order.indexOf(a.type) - order.indexOf(b.type)
  );

  // Modal functions
  const openModal = (room) => {
    setSelectedRoom(room);
    setImageIndex(0);
  };
  const closeModal = () => setSelectedRoom(null);
  const nextImage = () => {
    if (imageIndex < selectedRoom.imageurls.length - 1) setImageIndex(imageIndex + 1);
  };
  const prevImage = () => {
    if (imageIndex > 0) setImageIndex(imageIndex - 1);
  };

  return (
    <div>
      <Hero
        title="Våra Rum"
        subtitle="Upptäck våra bekväma och stilfulla rum – perfekta för både avkoppling och arbete."
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="container mt-5 rooms-section">
        {loading && <h3>Laddar...</h3>}
        {error && <h3>Något gick fel</h3>}
        {!loading && filteredRooms.length === 0 && <p>Inga rum hittades</p>}

        <div className="rooms-grid">
          {sortedRooms.map((room) => (
            <Room key={room._id} room={room} nights={nights} onShow={() => openModal(room)} />
          ))}
        </div>
      </div>

      <Modal
        show={!!selectedRoom}
        onClose={closeModal}
        room={selectedRoom}
        imageIndex={imageIndex}
        nextImage={nextImage}
        prevImage={prevImage}
      />
    </div>
  );
}
