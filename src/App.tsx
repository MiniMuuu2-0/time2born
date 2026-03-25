import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import ComingSoonPage from "./pages/ComingSoonPage";
import HomePage from "./pages/HomePage";
import ModelPage from "./pages/ModelPage";
import ProjectPage from "./pages/ProjectPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/progetto" element={<ProjectPage />} />
        <Route path="/servizi" element={<ServicesPage />} />
        <Route path="/modello" element={<ModelPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  );
}

export default App;
