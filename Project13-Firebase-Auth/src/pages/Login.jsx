import { useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
    navigate("/dashboard");
  };

  return (
    <div className="p-10">
      <h2 className="text-xl mb-4">Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-3 block"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-3 block"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-500 text-white px-4 py-2">Login</button>
      </form>

      <button
        onClick={googleLogin}
        className="bg-red-500 text-white px-4 py-2 mt-4"
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;
