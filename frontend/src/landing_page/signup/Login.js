import { useState } from "react";
import "./signup.css";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [vals, setVals] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setVals((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // backend expects: username, password
        body: JSON.stringify({
          username: vals.username,
          password: vals.password,
        }),
      });

      const res_data = await response.json();

      if (response.ok) {
        console.log(res_data);
        toast.success(res_data.message || "Login successful");
        if (res_data.token) {
          localStorage.setItem("token", res_data.token);
        }
       
      } else {
        toast.error(res_data.message || "Login failed");
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <div className="outerBox auth-page">
      <div className="box auth-card">
        <div className="auth-header">
          <h2>Welcome back 👋</h2>
          <p>Sign in to continue to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={vals.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={vals.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="form-footer-row">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button
              type="button"
              className="link-button"
              onClick={() => toast.info("Forgot password flow coming soon")}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          

          <p className="redirect-text">
            Don&apos;t have an account?{" "}
            <NavLink to="/register" className="redirect">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
