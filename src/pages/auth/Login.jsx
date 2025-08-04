import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, UserPlus, LogInIcon } from "lucide-react";
import Loading from "../../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { loading, userData } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && userData) {
      navigate("/account");
    }
  }, [loading, userData, navigate]);
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await doSignInWithGoogle();
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="min-h-screen flex w-full items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-md space-y-6">
        <div className="text-center">
          <LogInIcon className="mx-auto text-blue-500 mb-2" size={36} />
          <h2 className="text-2xl font-bold text-gray-800">
            Login to your account
          </h2>
        </div>

        {errorMessage && (
          <div className="text-red-600 text-sm bg-red-100 p-2 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className=" flex flex-col space-y-4">
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
            Login
          </button>
        </form>

        <div className="text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline flex items-center justify-center gap-1"
            >
              <UserPlus size={16} /> Create Account
            </Link>
          </span>
        </div>

        <div className="text-center flex items-center justify-center">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded flex justify-center items-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
