import { Helmet } from "react-helmet";
import GitLogin from "../../Components/GitLogin/GitLogin";

const Login = () => {

  return (
    <>
      <Helmet>
        <title>StaticStorm | Login</title>
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
