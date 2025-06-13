import { Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import Index from "../pages/Index";
import Bedroom from "../pages/Bedroom";
import Login from "../pages/Login";
import { Register } from "../pages/Register";
import PanelPage from "../pages/Panel";
import ReservationsPage from "../pages/Reservations";
import AdminPage from "../pages/AdminReservationCrud";

export function RouteWeb() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="quarto/:id" element={<Bedroom />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/panel" element={<PanelPage />} />
      <Route path="/reservas" element={<ReservationsPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
