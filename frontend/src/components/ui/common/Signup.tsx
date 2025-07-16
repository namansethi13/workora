import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { session, signUpNewUser } = UserAuth();
  console.log(session);
 
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password);

      if (result.success) {
        navigate("/signin");
      } else {
        setError(result.error || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred: " + (err?.message || err.toString()));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101827] px-4">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Let’s sign up
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in!
          </Link>
        </p>

        <div className="flex flex-col space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 dark:border-gray-700 rounded-md py-3 px-4 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 dark:border-gray-700 rounded-md py-3 px-4 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-md font-medium"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          {error && (
            <p className="text-red-500 text-center pt-2">
              {typeof error === "string"
                ? error
                : error.message || error.toString()}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Signup;