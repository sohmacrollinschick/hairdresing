import { useEffect, useState } from "react";

export function useFetch(fetcher, dependencies = []) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    setLoading(true);
    fetcher()
      .then((response) => {
        if (active) setData(response.data ?? response);
      })
      .catch((err) => {
        if (active) setError(err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, dependencies);

  return { data, error, loading };
}
