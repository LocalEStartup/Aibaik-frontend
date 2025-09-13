import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

import AuthProvider, { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import CategoryPage from "./pages/CategoryPage";

const PrivateRoute = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/explore-menu" element={<ExploreMenu />} />
          <Route path="/menus/:category" element={<CategoryPage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/masterchef" element={<ChefSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />

          {/* Role-Based Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/userdashboard"
            element={
              <PrivateRoute role="user">
                <UserDashboard />
              </PrivateRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
