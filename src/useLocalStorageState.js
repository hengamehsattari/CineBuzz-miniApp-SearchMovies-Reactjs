import { useEffect, useState } from "react";

export function useLocalStorageState(inintialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : inintialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
