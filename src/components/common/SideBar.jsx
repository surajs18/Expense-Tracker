import { BiCategory } from "react-icons/bi";
import { FaBook, FaUserCog } from "react-icons/fa";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { MdLogout } from "react-icons/md";

export default function SideBar() {
  const css = "text-black text-3xl m-auto p-auto";

  const icons = [
    { title: "Dashboard", icon: <BiCategory key={1} className={css} /> },
    { title: "All Transactions", icon: <FaBook key={2} className={css} /> },
    { title: "Add Expense", icon: <GiTakeMyMoney key={3} className={css} /> },
    { title: "Add Income", icon: <GiReceiveMoney key={4} className={css} /> },
    { title: "Profile", icon: <FaUserCog key={6} className={css} /> },
    { title: "Logout", icon: <MdLogout key={7} className={css} /> },
  ];

  return (
    <div className="w-[4rem] h-screen bg-[#2D2D2D] flex flex-col items-center justify-center cursor-pointer">
      {icons.map((icon, index) => (
        <div
          title={icon?.title}
          className="duration-500 w-[3rem] h-[3rem] rounded-full bg-white hover:bg-[#51D289] mx-auto flex items-center justify-center mb-10 "
          key={index}
        >
          {icon?.icon}
        </div>
      ))}
    </div>
  );
}
