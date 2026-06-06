import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import BookAppointment from "../pages/BookAppointment/BookAppointment";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/book" element={<BookAppointment />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute requireAdmin />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Dashboard section="Appointments Management" />} />
          <Route path="services" element={<Dashboard section="Services Management" />} />
          <Route path="stylists" element={<Dashboard section="Stylist Management" />} />
          <Route path="gallery" element={<Dashboard section="Gallery and Video Management" />} />
          <Route path="settings" element={<Dashboard section="Settings" />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
