import { useEffect, useState } from "react";

function useFetch<T>(url: string): [T | null, boolean, unknown | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // return () => {
    setLoading(true);
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    // };
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
