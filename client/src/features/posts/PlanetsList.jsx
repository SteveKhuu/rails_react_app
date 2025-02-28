// API_URL comes from the .env.development file
import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";

function PlanetList() {
  const [planets, setPlanets] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  // Fetch posts from the API
  useEffect(() => {
    async function loadPlanets() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPlanets(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred. Awkward...");
        console.log("An error occurred:", e);
      } finally {
        setLoading(false);
      }
    }
    loadPlanets();
  }, []);

  return (
    <div>
      {planets.map((planet) => (
        <div key={planet.id} className="post-container">
          <h2>{planet.title}</h2>
          <p>{planet.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanetList;
