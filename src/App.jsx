import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import componentImg from "./assets/components.png"
import jsxImg from "./assets/jsx-ui.png"
import propsImg from "./assets/config.png"
import stateImg from "./assets/state-mgmt.png"
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [tabContent,setTabContent]=useState();
  
  function handleSelect(selectedButton) {
    console.log(`${selectedButton}`);
    setTabContent(selectedButton);
  }
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

        <section id="examples" >
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent==="components"} onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={tabContent==="jsx"} onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent==="props"} onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={tabContent==="state"} onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
            {tabContent !=null ? (
              <div id="tab-content"> 
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>
              {EXAMPLES[tabContent].description}
            </p>
            <pre>
              <code>
              {EXAMPLES[tabContent].code}
              </code>
            </pre>
            </div>
            ):<p>Select a topic</p>
            }
        </section>

       
      </main>
    </div>
  );
}

export default App;
