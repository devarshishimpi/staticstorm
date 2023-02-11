import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Projects from "../../Components/Projects/Projects"

const Dashboard = () => {
  const navigate = useNavigate();

  const validateAccessToken = async () => {
    const response = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${localStorage.getItem('access-token')}`
      }
    });
    const json = await response.json();
    if (!json.id) {
      localStorage.removeItem('access-token');
      navigate('/login');
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      navigate('/login');
    }
    else {
      validateAccessToken();
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>StaticStorm | Dashboard</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

      <Projects/>

    </div>
  );
};

export default Dashboard;
