import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="top-border" />
      <nav className="navbar navbar-expand-md navbar-dark app-nav py-3">
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/">
            Negin Farzib
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
