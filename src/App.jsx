import Home from "./Fragments/Main";
import Navbar from "./components/elements/Navbar";
import Services from "./Fragments/Services";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#00B5C9] to-[#00CCBC] relative overflow-hidden">
      <Navbar />
      <Home />
      <Services />
      <Home />
      <Home />
      <Home />
      <Home />
    </div>
  );
}

export default App;
