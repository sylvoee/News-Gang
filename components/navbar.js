import Link from "next/link";

const Navbar = () => {
  return <div id="myNavbar">
    
    <nav className="navbar navbar-expand-sm navbar-primary shadow" style={{}}>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">NewsGanger</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" href="/"><b>Home</b></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>;
};
export default Navbar;