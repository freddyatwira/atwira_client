import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://atwira-server1.onrender.com/auth/login`,
        inputs
      );

      console.log(response.data);
      setInputs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mx-auto w-[90%] justify-around mt-20 ">
      <div className="bg-black h-16 w-full md:w-[50%] text-white mx-auto rounded-t-lg">
        <h1 className="flex justify-around text-3xl pt-3 text-[#43e643] font-serif font-bold">
          LOGIN FORM
        </h1>
      </div>

      <div className="w-full md:w-[50%] mx-auto border-2 border-[#110404] ">
        <form className="mx-4 mt-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter email . . . "
            required
          />

          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
          >
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
          <div>
            <button
              className="block w-full bg-[#110404] text-white my-2 py-1 rounded-sm"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
          </div>

          <div className="">
            <p className="w-full ml-16 my-2">Forgotten password</p>
            <p className="w-full ml-16 mb-6">New member ? Sign up</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;