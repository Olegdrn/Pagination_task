import { useEffect, useState } from "react";

export function UseFetch<T, P>(url: string, depends?: T) {
  const [data, setData] = useState<P | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [depends]);
  return { data, isLoading, error };
}
