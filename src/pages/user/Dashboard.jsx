import GraphGenerator from "../../components/Charts/GraphGenerator";
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
    <>
      <SideBar />
      <div className="py-16 cursor-default ml-[5rem]">
        <h3 className="text-4xl font-semibold">Hello, {userName}</h3>

        <div className="flex items-center justify-around gap-10 w-[90vw] my-10">
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
        <GraphGenerator
          data={[
            { label: "First", value: 5 },
            { label: "Second", value: 10 },
            { label: "Third", value: 7 },
          ]}
          type="Bar"
          x="X axis"
          y="Y axis"
          title="Chart"
        />
        <GraphGenerator
          data={[
            { label: "First", value: 5 },
            { label: "Second", value: 10 },
            { label: "Third", value: 7 },
          ]}
          type="Doughnut"
          x="X axis"
          y="Y axis"
          title="Doughnut"
        />
        <GraphGenerator
          data={[
            { label: "First", value: 5 },
            { label: "Second", value: 10 },
            { label: "Third", value: 7 },
          ]}
          type="Line"
          x="X axis"
          y="Y axis"
          title="Doughnut"
        />
        <GraphGenerator
          data={[
            { label: "First", value: 5 },
            { label: "Second", value: 10 },
            { label: "Third", value: 7 },
          ]}
          type="Pie"
          x="X axis"
          y="Y axis"
          title="Doughnut"
        />
        <GraphGenerator
          data={[
            { label: "First", value: 5 },
            { label: "Second", value: 10 },
            { label: "Third", value: 7 },
          ]}
          type="PolarArea"
          x="X axis"
          y="Y axis"
          title="Doughnut"
        />
        <GraphGenerator
          data={[
            { label: "First", value: 5 },
            { label: "Second", value: 10 },
            { label: "Third", value: 7 },
          ]}
          type="Radar"
          x="X axis"
          y="Y axis"
          title="Doughnut"
        />
        <GraphGenerator
          data={[
            { label: "First", value: 5 },
            { label: "Second", value: 10 },
            { label: "Third", value: 7 },
          ]}
          type="Scatter"
          x="X axis"
          y="Y axis"
          title="Doughnut"
        />
      </div>
    </>
  );
}
