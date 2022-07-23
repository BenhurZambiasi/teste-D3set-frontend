import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Person } from "../pages/Person";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/person" element={<Person />} />
    </Routes>
  );
}

export default Router;
