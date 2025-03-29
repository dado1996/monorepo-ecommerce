import { Link, Outlet, redirect } from "react-router";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import useStore from "../hooks/store";

export function Layout() {
  const totalItems = useStore((state) => state.getCartItemCount(state));
  const user = useStore((state) => state.role);
  console.log(user);
  if (!user) {
    redirect("/login");
  }
  return (
    <div>
      <nav className="bg-info">
        <Stack direction="horizontal" gap={3}>
          <Link to="/" className="p-2">
            My Shop
          </Link>
          <Link to="/cart" className="p-2 ms-auto">
            Cart
            <Badge pill>{totalItems}</Badge>
          </Link>
          <Link to="/" className="p-2">
            Profile
          </Link>
        </Stack>
      </nav>
      <Outlet />
    </div>
  );
}
