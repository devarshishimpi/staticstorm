import { Helmet } from "react-helmet";
import Hero from "../../Components/Sections/Hero.js"

const Home = () => {

  return (
    <>
      <Helmet>
        <title>StaticStorm | Home</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
