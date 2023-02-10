import { Helmet } from "react-helmet";
import Deploy from "../../Components/Deploy/Deploy"

const NewProject = () => {

  return (
    <div class="flex items-center justify-center">
      <Helmet>
        <title>StaticStorm | Home</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

      <Deploy/>

    </div>
  );
};

export default NewProject;
