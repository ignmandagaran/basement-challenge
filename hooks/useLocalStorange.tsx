import { useEffect, useState } from "react";

function useLocalStorange<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const storangeValue = localStorage.getItem(key);

    if (storangeValue !== null) {
      setValue(JSON.parse(storangeValue));
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorange;