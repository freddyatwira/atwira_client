import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home to="/" />,
      },
      {
        path: "/home",
        element: <Navigate replace to="/" />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="bg-gradient-to-b from-transparent via-fuchsia-200 to-[lightgreen]">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
