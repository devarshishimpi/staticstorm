import { Helmet } from "react-helmet";
import DeploySettings from "../../Components/DeploySettings/DeploySettings"

const SelectConfig = () => {

  return (
    <div class="flex items-center justify-center">
      <Helmet>
        <title>StaticStorm | New Project</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

      <DeploySettings/>

    </div>
  );
};

export default SelectConfig;
