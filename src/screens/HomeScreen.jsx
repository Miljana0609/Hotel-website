
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import BookingBar from "../components/BookingBar";
import Home from "../components/Home";
import ExploreHotel from "../components/ExploreHotel";
import Amenities from "../components/Amenities";
import RestaurantPreview from "../components/RestaurantPreview";
import Reviews from "../components/Reviews";
import SpaPreview from "../components/SpaPreview";


function HomeScreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.get(`${import.meta.env.VITE_API_URL}/api/rooms/getallrooms`)).data;        
        setrooms(data.rooms);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>

      <Hero
      
    title="Välkommen till City Comfort Hotel"
    subtitle="~ Your home away from home ~"
    image="https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=2128&auto=format&fit=crop"
      />
      <BookingBar />
      <Home />
      <ExploreHotel />
      <Amenities />
      <RestaurantPreview />
      <SpaPreview />
      <Reviews />


      </div>

  );
}

export default HomeScreen;


