// import { Navigate } from "react-router-dom";
// import { useGlobalContext } from "../context/context";
// import { toast } from "react-hot-toast";

// const ProtectedRoute = ({ children }) => {
//   const { userLoggedIn } = useGlobalContext();



//   if (!userLoggedIn && children === SupportPanel ) {
//     toast.error("Please sign in to access Chat Support page.");
//     return <Navigate to="/signin" />;
//   }
//   else if (!userLoggedIn && children === Dashboard ) {
//     toast.error("Please sign in to access Dashboard page.");
//     return <Navigate to="/signin" />;
//   }

//   return children; // Allow the child route to render if user is logged in
// };

// export default ProtectedRoute;


import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useGlobalContext();
  const location = useLocation();

  if (!userLoggedIn) {
    // Different toast messages based on the route
    switch (location.pathname) {
      case "/dashboard":
        toast.error("Please sign in to access Dashboard!");
        break;
      case "/support":
        toast.error("Please sign in to access Chat Support!");
        break;
      case "/settings":
        toast.error("Please sign in to access Settings!");
        break;
      case "/admin":
        toast.error("Please sign in to access Admin Dashboard!");
        break;
      default:
        toast.error("Please sign in to access this page.");
    }
    
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;