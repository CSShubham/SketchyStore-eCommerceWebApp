import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Privateroutes = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return currentUser ? children : <Navigate to="/login" />;
};

export default Privateroutes;
