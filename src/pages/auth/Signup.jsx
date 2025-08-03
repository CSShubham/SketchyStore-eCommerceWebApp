import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus, UserRoundPen, Mail, EyeOff, Lock, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../../components/Loading";
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { loading, userData } = useAuth();
  useEffect(() => {
    if (!loading && userData) {
      navigate("/account");
    }
  }, [loading, userData, navigate]);
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      await doCreateUserWithEmailAndPassword(email, password, username);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  if (loading) {
    return (
      <>
        <Loading />
        <h1>loading</h1>
      </>
    );
  }
  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-md space-y-6">
        <div className="text-center mb-0">
          <UserPlus className="mx-auto text-blue-500 mb-2" size={36} />
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
        </div>
        {errorMessage && (
          <div className="text-red-600 text-sm bg-red-100 p-2 rounded">
            {errorMessage}
          </div>
        )}
        <form
          onSubmit={handleSignup}
          className="flex flex-col gap-3 p-4 max-w-md mx-auto mb-0"
        >
          <div className="flex items-center border  rounded px-3 py-2">
            <UserRoundPen className="text-gray-400 mr-2" size={18} />
            <input
              name="username"
              placeholder="Username"
              required
              className="w-full outline-none  "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center border  rounded px-3 py-2">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              name="email"
              placeholder="Email"
              required
              className="w-full outline-none  "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border rounded px-3 py-2">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={() => setShowPass(!showPass)}>
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white  font-medium w-full  py-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline flex items-center justify-center gap-1"
            >
              <UserPlus size={16} /> LogIn
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
