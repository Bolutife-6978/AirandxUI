import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our SERVICES" title="What We Offer" />
        <Services />
      </div>
    </div>
  );
};

export default App;
