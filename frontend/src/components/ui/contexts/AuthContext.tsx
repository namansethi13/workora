import { useContext, useEffect, useState, createContext } from "react";
import { supabase } from "../superbaseClient"; 

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  // ✅ SIGN UP
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log("Error during signup:", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  // ✅ SIGN IN
  const signInUser = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

      if (error) {
        console.error("Sign in error occurred:", error);
        return { success: false, error: error.message };
      }

      console.log("Sign-in success", data);
      return { success: true, data };
    } catch (error) {
      console.error("Unexpected error:", error);
      return { success: false, error: error.message };
    }
  };

  // ✅ SIGN OUT
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Sign out error:", error);
    }
  };

  // ✅ SESSION MANAGEMENT
  useEffect(() => {
    // Initial session fetch
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    // Realtime listener
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook to Consume Context
export const UserAuth = () => useContext(AuthContext);