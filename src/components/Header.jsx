import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="top-border"></div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
