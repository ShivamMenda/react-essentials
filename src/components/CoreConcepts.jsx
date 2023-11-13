import CoreConcept from "./CoreConcept/CoreConcept";
import componentImg from "../assets/components.png";
import jsxImg from "../assets/jsx-ui.png";
import propsImg from "../assets/config.png";
import stateImg from "../assets/state-mgmt.png";
import "./CoreConcept/CoreConcept.css";
import Section from "./Section";

function CoreConcepts() {
    return(
        <Section title="Core Concepts" id="core-concepts">
        <ul>
        <CoreConcept img={componentImg} alt="Component img" title="Components" desc="The Core UI building block" />
        <CoreConcept img={jsxImg} alt="JSX img" title="JSX" desc="Return dynamic html code to define the actual markup" />
        <CoreConcept img={propsImg} alt="Props img" title="Props" desc="Making components configurable" />
        <CoreConcept img={stateImg} alt="State img" title="State" desc="Enables Components to re render UI" />
        </ul>
         
        </Section>
    );
    
}

export default CoreConcepts;