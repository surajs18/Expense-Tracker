import LoginImg from "../assets/Login.svg";
import SignupForm from "../components/Forms/SignupForm";
import usePostData from "../hooks/usePostData";

export default function SignupPage() {
  const { data, err, message, setSendData } = usePostData(
    [],
    "/api/v1/auth/register"
  );

  const UserDataSubmittion = (sendData) => {
    console.log(sendData);
    setSendData(sendData);
    if (err) {
      alert(message);
    } else {
      alert(`User with email: ${data?.email} is successfully registered.`);
    }
  };

  const OtpDataSubmittion = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center flex-wrap flex-col lg:flex-row ">
      <img
        src={LoginImg}
        alt=""
        draggable={false}
        className="max-h-screen hidden lg:block"
      />
      <div className="flex flex-col justify-center gap-10 mx-auto w-[50%] h-screen">
        <h3 className="text-5xl font-bold cursor-default text-center">
          Sign Up
        </h3>
        <SignupForm
          setUserData={UserDataSubmittion}
          setOtpData={OtpDataSubmittion}
        />
      </div>
    </div>
  );
}
