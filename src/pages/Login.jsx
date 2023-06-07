import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, reset } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";

const Login = () => {
  const { message, isError, isSuccess, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs));
  };

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, user, message, isSuccess, navigate, dispatch]);

  // if (isLoading) {
  //   return <BarLoader color="#36d7b7" />;
  // }

  return (
    <div className="mx-auto w-[90%] justify-around mt-20 ">
      <div className="bg-black h-16 w-full md:w-[50%] text-white mx-auto rounded-t-lg">
        <h1 className="flex justify-around text-3xl pt-3 text-[#43e643] font-serif font-bold">
          LOGIN FORM
        </h1>

        {isLoading && (
          <BarLoader
            color="#43e643"
            className="flex justify-around my-2 mx-auto w-full"
          />
        )}
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
            name="email"
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
            name="password"
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
