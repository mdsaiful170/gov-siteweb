import "./App.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "./componet/mainbox/Navbar";
import Hero from "./componet/mainbox/hero";
import Solutioncard from "./componet/mainbox/Solutioncard";
import Review from "./componet/mainbox/Review";

function App() {
  return (
    <>
      <main className=" bg-[url(img/home.svg)] min-h-[100vw] bg-no-repeat bg-top">
        <Navbar />
        <Hero />
        <Solutioncard />
        <Review />
      </main>
    </>
  );
}

export default App;
