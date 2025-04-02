import { Link } from "react-router";

export function Forbidden() {
  return (
    <>
      <h1>Forbidden</h1>
      <p>Yo don't have permission to go to this website</p>
      <Link to="/login">Go back to login</Link>
    </>
  );
}
