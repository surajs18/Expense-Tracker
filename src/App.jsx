import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRoute from "./routes/LoginRoute";

function App() {
  return (
    <div className="bg-[#000] text-[#FCF8D9] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
