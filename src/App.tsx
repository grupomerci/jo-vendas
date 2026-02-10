import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TargetAudience } from "./components/TargetAudience";
import { Content } from "./components/Content";
import { Author } from "./components/Author";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <Content />
        <Author />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
