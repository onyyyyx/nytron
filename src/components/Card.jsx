import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

export default function Card(props) {
  const ICONS = {
    github: github,
    instagram: instagram,
  };
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${props.name.toLowerCase()} card`}
    >
      <img src={ICONS[props.name.toLowerCase()]} alt={`${props.name.toLowerCase()} icon by Icons8`} className="icon" />
      <h3>{props.name}</h3>
    </a>
  );
}
