import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";

function FoodScreen() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/api/restaurang")
      .then(res => res.json())
      .then(data => setRestaurants(data));

  }, []);

  return (

    <div>



      {restaurants.map(r => (

        <div key={r._id}>

<Hero
  title={r.name}
  subtitle={r.description}
  image={r.imageurl}
/>

          <div className="menu-container">

            {r.menuCategories?.map((category, index) => (

              <div key={index} className="menu-category">

                <h2 className="menu-title">{category.title}</h2>

                {category.items.map((dish, i) => (

                  <div key={i} className="menu-item">

                    <div>

                      <h4>{dish.name}</h4>
                      <p>{dish.desc}</p>

                    </div>

                    <span className="menu-price">{dish.price} kr</span>

                  </div>

                ))}

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  );

}

export default FoodScreen;