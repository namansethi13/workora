import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { session, signInUser } = UserAuth();
  console.log(session);
 
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signInUser({ email, password });

      if (result.success) {
        navigate("/dashboard");
      } else {
        setError(result.error?.message || result.error || "Sign in failed");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred: " + (err?.message || err.toString()));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#101827] flex items-center justify-center px-4">
      <form 
        onSubmit={handleSignIn} 
        className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">Welcome back</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Don’t have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>

        <div className="space-y-4">
          <input 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Email" 
            type="email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <input 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password" 
            type="password"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </form>
    </div>
  );
}

export default Signin;