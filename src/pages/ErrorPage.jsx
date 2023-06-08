import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-[90%] h-screen mt-16">
      <h1 className="mx-auto text-3xl">Oops! Page not found</h1>
      <div className="flex py-3">
        <p
          className="text-[#fc3f3f] px-8 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Go back
        </p>
        <Link to="/" className="text-[#3fa7fc]">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
