/* eslint-disable react/prop-types */
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";
import FullPage from "./FullPage";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 3. If there is NO authenticated user, redirect to the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2. While loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
