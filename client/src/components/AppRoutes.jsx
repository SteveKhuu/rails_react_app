import React from "react";
import { Route, Routes } from "react-router-dom";

import PlanetList from "../features/posts/PlanetsList";
import PlanetDetails from "../features/posts/PlanetDetails";
import NewPlanetForm from "../features/posts/NewPlanetForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PlanetList />} />
      <Route path="planets/:id" element={<PlanetDetails />} />
      <Route path="/new" element={<NewPlanetForm />} />
    </Routes>
  );
}

export default AppRoutes;
