import reactImg from "../../assets/react-core-concepts.png"
import "./Header.css";
function Header(props) {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>{props.title}</h1>
        <p>
        {props.para}
        </p>
      </header>
    );
  
  }

export default Header;