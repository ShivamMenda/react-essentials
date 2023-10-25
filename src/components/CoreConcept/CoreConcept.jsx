import "./CoreConcept.css";
function CoreConcept(props) {
    return(
        <li>
            <img src={props.img} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </li>
    );
    
}

export default CoreConcept;