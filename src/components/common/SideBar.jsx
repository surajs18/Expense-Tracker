import { BiCategory } from "react-icons/bi";
import { FaBook, FaUserCog } from "react-icons/fa";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const css = "text-black text-3xl m-auto p-auto";

  const icons = [
    {
      title: "Dashboard",
      icon: <BiCategory key={1} className={css} />,
      url: "/user",
    },
    {
      title: "All Transactions",
      icon: <FaBook key={2} className={css} />,
      url: "/user/transaction",
    },
    {
      title: "Add Expense",
      icon: <GiTakeMyMoney key={3} className={css} />,
      url: "/user/expense",
    },
    {
      title: "Add Income",
      icon: <GiReceiveMoney key={4} className={css} />,
      url: "/user/income",
    },
    {
      title: "Profile",
      icon: <FaUserCog key={6} className={css} />,
      url: "/user/profile",
    },
    { title: "Logout", icon: <MdLogout key={7} className={css} /> },
  ];

  return (
    <div className="w-[4rem] h-screen bg-[#2D2D2D] flex flex-col items-center justify-center cursor-pointer">
      {icons.map((icon, index) => (
        <div
          title={icon?.title}
          className={`duration-500 w-[3rem] h-[3rem] rounded-full ${
            pathname === icon?.url ? "bg-[#51D289]" : "bg-white"
          } hover:bg-[#51D289] mx-auto flex items-center justify-center mb-10 `}
          key={index}
          onClick={() => navigate(icon?.url)}
        >
          {icon?.icon}
        </div>
      ))}
    </div>
  );
}
