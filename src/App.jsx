import "./App.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "./componet/mainbox/Navbar";

function App() {
  return (
    <>
      <main className=" bg-[url(img/home.svg)] min-h-[100vw] bg-no-repeat bg-top">
        <Navbar />
      </main>
    </>
  );
}

export default App;
