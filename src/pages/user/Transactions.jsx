import { useEffect, useState } from "react";
import SideBar from "../../components/common/SideBar";
import TransactionCard from "../../components/common/TransactionCard";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [transactionList, setTransactionList] = useState([
    {
      _id: "",
      amount: 5000,
      category: "Rent",
      description: "Rent",
      date: "2024-03-15",
    },
  ]);
  const [transactions, setTransactions] = useState(transactionList);

  useEffect(() => {
    function updateTransactions() {
      const list = transactionList?.filter((transaction) => {
        if (
          transaction?.category
            ?.toLocaleLowerCase()
            ?.startsWith(search?.toLocaleLowerCase()) ||
          transaction?.description
            ?.toLocaleLowerCase()
            ?.startsWith(search?.toLocaleLowerCase())
        )
          return transaction;
      });
      setTransactions(list);
    }

    updateTransactions();
  }, [search, transactionList, transactions]);

  return (
    <div className="flex w-[100vw]">
      <SideBar />
      <div className="w-full">
        <h3 className="text-3xl text-[#FCF8D9] my-5 font-semibold ml-[10%] mt-10">
          View Transactions
        </h3>
        <div className="ml-[10%] w-[80%] flex justify-between flex-wrap mb-16 items-center">
          <h5 className="text-xl text-[#FFE600]">Description</h5>
          <input
            type="search"
            value={search}
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
            className="py-2 px-3 text-black outline-none rounded-full"
          />
        </div>
        {transactions?.map((transaction) => (
          <TransactionCard
            key={transaction?._id}
            description={transaction?.description}
            date={transaction?.date}
            category={transaction?.category}
            amount={transaction?.amount}
          />
        ))}
      </div>
    </div>
  );
}
