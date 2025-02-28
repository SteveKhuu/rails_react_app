import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

function PlanetDetails() {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentPlanet = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPlanet(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("An error occurred:", e);
      }
    };
    fetchCurrentPlanet();
  }, [id]);

  if (!planet) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{planet.title}</h2>
      <p>{planet.body}</p>
      <Link to="/">Back to Posts</Link>
    </div>
  );
}

export default PlanetDetails;
