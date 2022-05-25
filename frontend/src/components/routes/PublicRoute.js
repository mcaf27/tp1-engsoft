import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, isLogged }) => {
  if (isLogged) return <Navigate to="/" />;
  else return children;
};

export default PublicRoute;
