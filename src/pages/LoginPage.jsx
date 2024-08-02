import LoginImg from "../assets/Login.svg";
import LoginForm from "../components/Forms/LoginForm";

export default function LoginPage() {
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
          Sign In
        </h3>
        <LoginForm />
      </div>
    </div>
  );
}
