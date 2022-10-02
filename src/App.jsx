import Navbar from "./components/elements/Navbar";
import Home from "./Fragments/Main";
import Services from "./Fragments/Services";
import Destinations from "./Fragments/Destinations";
import Steps from "./Fragments/Steps";
import Testimonial from "./Fragments/Testimonial";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#00B5C9] to-[#00CCBC] relative overflow-hidden">
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Steps />
      <Testimonial />
      <Home />
    </div>
  );
}

export default App;
