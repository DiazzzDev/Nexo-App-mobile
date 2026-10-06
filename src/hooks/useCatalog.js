import { useCallback, useEffect, useState } from 'react';

const CATALOG_URL = 'https://dragonball-api.com/api/planets';

export default function useCatalog() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(CATALOG_URL);
      if (!response.ok) throw new Error('No fue posible conectar con los planetas.');
      const data = await response.json();
      setItems(data.items || []);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Revisa tu conexión e inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { items, isLoading, error, refresh };
}
