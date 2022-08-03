import { Route, Routes } from "react-router-dom";
// import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/authentication/login";
// import HomePage from "./pages/homePage";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/homePage" element={<HomePage />} /> */}
      </Routes>
    </>
  );
}

export default App;
