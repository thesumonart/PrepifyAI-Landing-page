import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GetStarted from "./components/GetStarted";
import Statistics from "./components/Statistics";
import GetHiredFaster from "./components/GetHiredFaster";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="min-h-screen bg-background-primary font-questrial">
      <Header />
      <Hero />
      <Features />
      <GetStarted />
      <Statistics />
      <GetHiredFaster />
      <Testimonials />
    </div>
  );
};

export default App;
