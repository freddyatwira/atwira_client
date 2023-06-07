import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="mt-16">
      <div>
        <div>
          <h1> name</h1>

          <h1>home</h1>
          <h1>home</h1>
          <h1>home</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
