import { Helmet } from "react-helmet";
import GitLogin from "../../Components/GitLogin/GitLogin";

const Login = () => {

  return (
    <>
      <Helmet>
        <title>StaticStorm | Home</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <GitLogin />
    </>
  );
};

export default Login;
