import SideBar from "../../components/common/SideBar";
import ExpenseForm from "../../components/Forms/ExpenseForm";

export default function InputExpense() {
  return (
    <div className=" ml-[5rem] addForm">
      <SideBar />
      <ExpenseForm />
    </div>
  );
}
