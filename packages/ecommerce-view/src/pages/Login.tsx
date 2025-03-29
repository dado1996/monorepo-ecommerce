import { useState } from "react";
import Form from "react-bootstrap/Form";
import useStore from "../hooks/store";
import { redirect } from "react-router";
import Toast from "react-bootstrap/Toast";

type LoginForm = {
  username: string;
  password: string;
};

export function Login() {
  const [loginData, setLoginData] = useState<LoginForm>({ username: "", password: "" });
  const [error, setError] = useState("");
  const setRole = useStore((state) => state.setRole);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogin = () => {
    if (!loginData.username || !loginData.password) {
      setError("Invalid username or password");
      return;
    }
    if (loginData.username !== "client" && loginData.username !== "admin") {
      setError("Invalid username or password");
      return;
    }
    setRole(loginData.username);
    redirect("/");
  };
  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
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
