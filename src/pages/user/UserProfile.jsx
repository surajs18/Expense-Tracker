import { useState } from "react";

export default function UserProfile() {
  const email = "surajs@pentagonspace.in";
  const name = "Suraj S";
  const [password, setPassword] = useState("");
  const [enablePassword, setEnablePassword] = useState("");

  return (
    <div>
      <p className="text-xl text-semibold">Name: {name}</p>
      <p className="text-xl ">Email: {email}</p>
      <button
        className="px-3 py-2 bg-[#51D289] w-fit mx-auto "
        onClick={() => setEnablePassword((prev) => !prev)}
      >
        Update Password
      </button>
      {enablePassword && (
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
      )}
    </div>
  );
}
