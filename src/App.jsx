import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExploreMenu from "./pages/ExploreMenu";
import Reservation from "./pages/Reservation";
import ChefSection from "./pages/ChefSection";
import About from "./pages/Aboutus";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDashboard from "./pages/UserDasboard";
import LoginPage from "./auth/Login";
import RegisterPage from "./auth/Register";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/explore-menu" element={<ExploreMenu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/masterchef" element={<ChefSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        {/* add more routes later */}
      </Routes>
      <Footer />
    </Router>
  );
}
