import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  const navigate = useNavigate();

  // NOTE: return a callback function to navigate back on demand and also make our custom hook useMoveBack legit
  return () => navigate(-1);
}
