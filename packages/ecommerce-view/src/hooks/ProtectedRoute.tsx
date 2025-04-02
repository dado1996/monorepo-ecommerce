import { Navigate } from "react-router";
import useStore from "./store";

const PrivateRouter: React.FC<{ children: React.ReactNode; authorized: "client" | "admin" }> = ({
  children,
  authorized,
}) => {
  const user = useStore((state) => state.user);

  if (!user) return <Navigate to="/login" />;
  if (user !== authorized) return <Navigate to="/forbidden" />;
  return children;
};

export default PrivateRouter;
