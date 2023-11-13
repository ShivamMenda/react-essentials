import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header title="React essentials" para="React concepts explained!" />
      <main>
       <CoreConcepts />
       <Examples />
      </main>
    </>
  );
}

export default App;
