import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CustomNavLink = ({ to, children,onClick  }) => {
  return (
    <Nav.Link as={Link} to={to} style={{ textDecoration: 'none', color: 'inherit' }} onClick={onClick}>
      {children}
    </Nav.Link>
  );
};

