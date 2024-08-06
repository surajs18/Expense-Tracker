import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/user/Dashboard";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
