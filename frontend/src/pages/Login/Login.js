import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import GitLogin from "../../Components/GitLogin/GitLogin";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      navigate('/dashboard');
    }
  }, []);
  

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
