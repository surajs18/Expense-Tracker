import SideBar from "../../components/common/SideBar";
import { FaRupeeSign } from "react-icons/fa";

export default function Dashboard() {
  const userName = "Suraj";

  const transactions = [
    { title: "Total Income", amount: "12345" },
    { title: "Total Expense", amount: "12345" },
    { title: "Total Balance", amount: "12345" },
  ];

  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="pt-16 cursor-default">
        <h3 className="text-4xl font-semibold">Hello, {userName}</h3>

        <div className="flex items-center justify-around gap-10 w-[90vw] mt-10">
          {transactions.map((transaction, index) => (
            <div className="w-[15rem] py-10 bg-[#2D2D2D] mx-auto" key={index}>
              <h4 className="text-3xl font-semibold text-center">
                {transaction.title}
              </h4>
              <h5 className="text-2xl font-semibold pt-5 flex items-center justify-center">
                <FaRupeeSign />
                {transaction.amount}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
