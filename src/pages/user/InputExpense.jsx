import { useNavigate } from "react-router-dom";
import SideBar from "../../components/common/SideBar";
import ExpenseForm from "../../components/Forms/ExpenseForm";
import useGetData from "../../hooks/useGetData";
import usePostData from "../../hooks/usePostData";
import { useState } from "react";

export default function InputExpense() {
  const navigate = useNavigate();
  const {
    data: getCategoryData,
    error: getCategoryError,
    message: getCategoryMessage,
  } = useGetData("/category", []);
  console.log({ getCategoryData, getCategoryError, getCategoryMessage });

  const [categoryResponse, setCategoryResponse] = useState({
    data: null,
    err: null,
    message: null,
  });

  // eslint-disable-next-line no-unused-vars
  const [expenseResponse, setExpenseResponse] = useState({
    data: null,
    err: null,
    message: null,
  });

  const CreateCategory = usePostData("/category");
  const SubmitExpense = usePostData("/expense");

  const submitFormData = (sendData) => {
    // eslint-disable-next-line no-unused-vars
    var data;
    if (sendData?.newCategory) {
      CreateCategory({ name: sendData.category })
        .then((res) => {
          setCategoryResponse(res);
          data = res;
        })
        .catch((err) => {
          console.log(err);
          setCategoryResponse({
            data: null,
            err: true,
            message: "Not able to create such category. Try again!",
          });
          alert("Not able to create such category. Try again!");
        });
      // console.log("object");
      setTimeout(500);
      console.log({ categoryResponse, data });

      if (categoryResponse?.data?._id) {
        console.log(sendData);
        SubmitExpense({
          category: categoryResponse?.data?._id,
          date: sendData?.expenseDate,
          amount: sendData?.spent,
          description: sendData?.desc,
        })
          .then((res) => {
            setExpenseResponse(res);
            data = res;
            alert(res?.message);
            navigate("/user/transaction");
          })
          .catch((err) => {
            console.log(err);
            setExpenseResponse({
              data: null,
              err: true,
              message: "Not able to create such expense. Try again!",
            });
            alert("Not able to create such expense. Try again!");
          });
      }

      console.log(expenseResponse);
    } else {
      console.log(sendData);
      SubmitExpense({
        category: sendData?.category?.value,
        date: sendData?.expenseDate,
        amount: sendData?.spent,
        description: sendData?.desc,
      })
        .then((res) => {
          setExpenseResponse(res);
          data = res;
          alert(res?.message);
          navigate("/user/transaction");
        })
        .catch((err) => {
          console.log(err);
          setExpenseResponse({
            data: null,
            err: true,
            message: "Not able to create such expense. Try again!",
          });
          alert("Not able to create such expense. Try again!");
        });
    }
  };

  return (
    <div className=" ml-[5rem] addForm">
      <SideBar />
      <ExpenseForm
        submitFormData={submitFormData}
        getCategoryData={getCategoryData}
      />
    </div>
  );
}
