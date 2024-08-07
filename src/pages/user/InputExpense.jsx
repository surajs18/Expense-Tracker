import SideBar from "../../components/common/SideBar";
import ExpenseForm from "../../components/Forms/ExpenseForm";

export default function InputExpense() {
  return (
    <div className="flex w-[100vw] addForm">
      <SideBar />
      <ExpenseForm />
    </div>
  );
}
