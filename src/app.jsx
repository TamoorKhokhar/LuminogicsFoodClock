import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SignIn from "./pages/authentication/signIn";
import SignUp from "./pages/authentication/signUp";
import HomePage from "./pages/homePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
