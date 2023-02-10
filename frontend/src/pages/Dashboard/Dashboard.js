import { Helmet } from "react-helmet";
import Projects from "../../Components/Projects/Projects"

const Dashboard = () => {

  return (
    <div class="flex items-center justify-center">
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
