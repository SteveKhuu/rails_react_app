import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function NewPlanetForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, body };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, locale',
        'Access-Control-Allow-Methods': 'GET, POST',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const { id } = await response.json();
      navigate(`/planets/${id}`);
    } else {
      console.log("An error occurred.");
    }
  };

  return (
    <div>
      <h2>Create a New Planet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            id="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            id="bodyInput"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create Planet</button>
        </div>
      </form>
    </div>
  );
}

export default NewPlanetForm;
