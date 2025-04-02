import { useState } from "react";
import Form from "react-bootstrap/Form";
import useStore from "../hooks/store";
import { useNavigate } from "react-router";
import Toast from "react-bootstrap/Toast";

type LoginForm = {
  username: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginForm>({ username: "", password: "" });
  const [error, setError] = useState("");
  const login = useStore((state) => state.login);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!loginData.username || !loginData.password) {
      setError("Invalid username or password");
      return;
    }
    if (loginData.username !== "client" && loginData.username !== "admin") {
      setError("Invalid username or password");
      return;
    }
    login(loginData.username);
    if (loginData.username === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <h1>Login</h1>
      <Form method="POST" onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={handleChange} name="username" type="text" placeholder="user" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </Form>
      <Toast show={!!error} onClose={() => setError("")}>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
    </>
  );
}
