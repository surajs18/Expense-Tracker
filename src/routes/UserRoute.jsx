import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/user/Dashboard";
import InputExpense from "../pages/user/InputExpense";
import InputIncome from "../pages/user/InputIncome";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expense" element={<InputExpense />} />
      <Route path="/income" element={<InputIncome />} />
    </Routes>
  );
}
