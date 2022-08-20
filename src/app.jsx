import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/authentication/signIn';
import SignUp from './pages/authentication/signUp';
import Protected from './components/protected';
import AdminHomePage from './pages/adminDashBoard';
import Auth from './components/auth';
import HomePage from './pages/homePage';
import AdminLogin from './pages/adminLogin';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<Protected Component={SignIn} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/homePage" element={<Protected Component={HomePage} />} />
        <Route path="/adminLogin" element={<Auth Component={AdminLogin} />} />
        <Route path="/adminDashboard" element={<Auth Component={AdminHomePage} />} />
      </Routes>
    </>
  );
}

export default App;
