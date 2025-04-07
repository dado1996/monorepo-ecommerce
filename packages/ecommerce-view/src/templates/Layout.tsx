import { Link, Outlet } from "react-router";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import useStore from "../hooks/store";
import Dropdown from "react-bootstrap/Dropdown";

export function Layout() {
  const totalItems = useStore((state) => state.getCartItemCount(state));
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  return (
    <div>
      <nav className="bg-info">
        <Stack direction="horizontal" gap={3}>
          <Link hidden={user === "admin"} to="/" className="p-2">
            My Shop
          </Link>
          <Link hidden={user === "admin"} to="/cart" className="p-2 ms-auto">
            Cart
            <Badge pill>{totalItems}</Badge>
          </Link>
          <Dropdown className="">
            <Dropdown.Toggle variant="secondary">{user}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>My purchases</Dropdown.Item>
              <Dropdown.Item href="#" onClick={logout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
      </nav>
      <Outlet />
    </div>
  );
}
