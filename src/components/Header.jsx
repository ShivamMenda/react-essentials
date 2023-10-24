import reactImg from "../assets/react-core-concepts.png"
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