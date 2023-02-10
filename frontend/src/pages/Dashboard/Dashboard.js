import { Helmet } from "react-helmet";
import DeploySettings from "../../Components/DeploySettings/DeploySettings"

const Dashboard = () => {

  return (
    <div class="flex items-center justify-center">
      <Helmet>
        <title>StaticStorm | Home</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

      <DeploySettings/>

    </div>
  );
};

export default Dashboard;
