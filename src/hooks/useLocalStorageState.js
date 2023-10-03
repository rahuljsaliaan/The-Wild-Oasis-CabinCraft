import { useState } from "react";
import { useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // NOTE: lazy initialization is possible only by passing call back function to the useState hooks
  const [value, setValue] = useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialState
  );

  // * Dependencies (key: is for initial function call. value: is when value changes)
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}
