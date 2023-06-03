import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      Oops! Page not found
      <Link to="/home" className="text-[#fc3f3f] pl-2">
        home
      </Link>
    </div>
  );
};

export default ErrorPage;
