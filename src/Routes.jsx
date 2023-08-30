import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopFifteen = React.lazy(() => import("pages/DesktopFifteen"));
const DesktopFourteen = React.lazy(() => import("pages/DesktopFourteen"));
const FillerPOne = React.lazy(() => import("pages/FillerPOne"));
const NeoClassicalPage = React.lazy(() => import("pages/NeoClassicalPage"));
const JazzPage = React.lazy(() => import("pages/JazzPage"));
const HipHopPage = React.lazy(() => import("pages/HipHopPage"));
const InstrumentalPage = React.lazy(() => import("pages/InstrumentalPage"));
const DesktopThirteen = React.lazy(() => import("pages/DesktopThirteen"));
const DesktopTwelve = React.lazy(() => import("pages/DesktopTwelve"));
const EDMPage = React.lazy(() => import("pages/EDMPage"));
const MetalPage = React.lazy(() => import("pages/MetalPage"));
const RapPage = React.lazy(() => import("pages/RapPage"));
const LatinJazzPage = React.lazy(() => import("pages/LatinJazzPage"));
const RockPage = React.lazy(() => import("pages/RockPage"));
const DesktopEleven = React.lazy(() => import("pages/DesktopEleven"));
const DesktopTen = React.lazy(() => import("pages/DesktopTen"));
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/load2" element={<DesktopSeven />} />
          <Route path="/select" element={<DesktopSix />} />
          <Route path="/desktopeight" element={<DesktopEight />} />
          <Route path="/login" element={<DesktopFour />} />
          <Route path="/signup" element={<DesktopFive />} />
          <Route path="/load1" element={<DesktopNine />} />
          <Route path="/desktopten" element={<DesktopTen />} />
          <Route path="/main" element={<DesktopEleven />} />
          <Route path="/rockpage" element={<RockPage />} />
          <Route path="/latinjazzpage" element={<LatinJazzPage />} />
          <Route path="/rappage" element={<RapPage />} />
          <Route path="/metalpage" element={<MetalPage />} />
          <Route path="/edmpage" element={<EDMPage />} />
          <Route path="/desktoptwelve" element={<DesktopTwelve />} />
          <Route path="/desktopthirteen" element={<DesktopThirteen />} />
          <Route path="/instrumentalpage" element={<InstrumentalPage />} />
          <Route path="/hiphoppage" element={<HipHopPage />} />
          <Route path="/jazzpage" element={<JazzPage />} />
          <Route path="/neoclassicalpage" element={<NeoClassicalPage />} />
          <Route path="/fillerpone" element={<FillerPOne />} />
          <Route path="/desktopfourteen" element={<DesktopFourteen />} />
          <Route path="/desktopfifteen" element={<DesktopFifteen />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
