import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-5 mx-auto">
      <div className="flex flex-col">
        <label className="font-semibold">Email:</label>
        <input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black text-white py-0.5 px-1.5 border-2 focus:border-white focus:outline-none rounded-lg h-[2.5rem] w-[18rem]"
          autoFocus
          required
          placeholder="Eg. Harish"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="bg-black text-white py-0.5 px-1.5 border-2 focus:border-white focus:outline-none rounded-lg h-[2.5rem] w-[18rem]"
          placeholder="******"
        />
      </div>
      <button
        type="submit"
        className="bg-[#51D289] text-black w-[18rem] h-[2.5rem]"
      >
        Start Your Calculation
      </button>

      <p className="text-white font-light text-center cursor-pointer">
        Don&apos;t have an account?{" "}
        <span className="text-green-500">Sign Up</span>
      </p>
    </form>
  );
}