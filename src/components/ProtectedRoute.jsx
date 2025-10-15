import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/context'; 
import { toast } from 'react-hot-toast';

const ProtectedRoute = ({ children }) => {

  const { userLoggedIn } = useGlobalContext(); 

  if (!userLoggedIn || !localStorage.getItem('token')) {
    
    toast.error('Please sign in to access this page.');
    return <Navigate to="/signin" />;
  }

  return children;  // Allow the child route to render if user is logged in
};

export default ProtectedRoute;
