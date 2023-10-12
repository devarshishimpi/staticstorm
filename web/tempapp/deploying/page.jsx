import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Deploy from "../../Components/Deploy/Deploy";

const NewProject = () => {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>StaticStorm | Deploying</title>
        <meta name="description" content="" />
      </Helmet>

      <Deploy id={id} />
    </div>
  );
};

export default NewProject;
