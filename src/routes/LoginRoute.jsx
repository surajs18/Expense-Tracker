import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
