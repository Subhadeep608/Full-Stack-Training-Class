import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { user, logout } = useContext(AuthContext);

  return (
    <nav>

      <h2>My Website</h2>

      {user ? (
        <>
          <h3>Welcome, {user.name}</h3>

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}

    </nav>
  );
}

export default Navbar;