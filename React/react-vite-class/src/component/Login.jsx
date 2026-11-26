import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const { user, login } = useContext(AuthContext);

  return (
    <div>

      {user ? (
        <h2>You are logged in!</h2>
      ) : (
        <button onClick={login}>
          Login
        </button>
      )}

    </div>
  );
}

export default Login;