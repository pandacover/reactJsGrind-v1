import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Copyright</p>
      <Link to='/about'>About Page</Link>
    </footer>
  )
}

export default Footer;