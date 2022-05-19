import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <Link to="/">home</Link>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </>
  )
}

export default Navbar
