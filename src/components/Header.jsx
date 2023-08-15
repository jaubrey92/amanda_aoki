import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navStyle">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        {/* <h1>Amanda Aoki</h1> */}
        <Link to="/books">Books</Link>
      </nav>
    </header>
  )
}

export default Header
