import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loggedIn = Cookies.get("at");

  if (loggedIn) {
    return <>{children}</>;
  }

  return (
    <div className="w-full h-screen m-auto text-center ">
      <div className="h-1/2" />
      <p>User not logged-in</p>
      <Link to={"/"}>Go to Login page</Link>
    </div>
  );
}
