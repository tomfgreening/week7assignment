import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <h2>This is the Header</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/menu"}>Menu</Link>
      Link
    </>
  );
}
