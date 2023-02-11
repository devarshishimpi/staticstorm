import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import DeploySettings from "../../Components/DeploySettings/DeploySettings"

const SelectConfig = () => {
  const navigate = useNavigate();
  let { id } = useParams();

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

  
  const getRepoDetails = async () => {
    const response = await fetch(`https://api.github.com/repositories/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${localStorage.getItem('access-token')}`
      }
    });
    const json = await response.json();

    console.log(json);
  }


  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      navigate('/login');
    }
    else {
      validateAccessToken();
      getRepoDetails();
    }
  }, []);
  

  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>StaticStorm | New Project</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

      <DeploySettings id={id} />

    </div>
  );
};

export default SelectConfig;
