import { Link } from "react-router";
import "../../css/navbar.css"

export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <Link className="navbar-links"to={"/Home"}>Home</Link>
        <Link className="navbar-links"to={"/Posts"}>Posts</Link>
        <Link className="navbar-links"to={"/Login"}>Login</Link>
      </div>
    </>
  );
}
