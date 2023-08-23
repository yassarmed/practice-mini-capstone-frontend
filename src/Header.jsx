import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

// import { Signup } from "./signup";
// import { Modal } from "./Modal";

export function Header() {
  // const [isSignupVisible, setIsSignupVisible] = useState(false);
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li>
          <a className="dropdown-item" href="/signup">
            Signup
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/login">
            Login
          </a>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <li>
        <LogoutLink />
      </li>
    );
  }

  // const handleSignupShow = () => {
  //   setIsSignupVisible(true);
  // };

  // const handleSignupClose = () => {
  //   setIsSignupVisible(false);
  // };
  return (
    <header>
      {/* <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal> */}
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              BLOG!!
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      {/* <LogoutLink /> */}
                      {authenticationLinks}
                    </li>
                    <li>
                      <a href="/posts">All Posts</a>
                    </li>
                    <li>
                      <a href="/posts/new">Create a post</a>
                    </li>
                    <li>
                      {/* <a onClick={handleSignupShow} href="#">
                        Signup
                      </a> */}
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      {/* <a className="dropdown-item" href="/signup">
                        Signup
                      </a> */}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* <a className="" href="/login">
                    Login
                  </a> */}
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-warning" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
