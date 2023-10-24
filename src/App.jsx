import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import componentImg from "./assets/components.png"
import jsxImg from "./assets/jsx-ui.png"
import propsImg from "./assets/config.png"
import stateImg from "./assets/state-mgmt.png"
function App() {
  return (
    <div>
      <Header title="React essentials" para="React concepts explained!" />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept img={componentImg} alt="Component img" title="Components" desc="The Core UI building block" />
        <CoreConcept img={jsxImg} alt="JSX img" title="JSX" desc="Return dynamic html code to define the actual markup" />
        <CoreConcept img={propsImg} alt="Props img" title="Props" desc="Making components configurable" />
        <CoreConcept img={stateImg} alt="State img" title="State" desc="Enables Components to re render UI" />
        </ul>
         
        </section>
       
      </main>
    </div>
  );
}

export default App;
