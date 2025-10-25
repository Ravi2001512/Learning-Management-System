import Hero from "./Hero";
import Navigation from "./Navigation";
//import { Button } from "@/components/ui/button";
//import { Badge } from "@/components/ui/badge";
import Products from "./Products";

function App() {
  const name = "Ravi";
  const cartCount = 5;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
