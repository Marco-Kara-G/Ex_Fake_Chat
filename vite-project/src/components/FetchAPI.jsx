import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function UseFetchAPI() {
  const { data, error, mutate } = useSWR(
    `https://mocki.io/v1/2ba4caa4-d23d-4006-a9fb-5510851eddc9`,
    fetcher
  );
  const handleNewRequest = () => {
    mutate();
  };

  return {
    messages: data,
    error,
    loading: !data && !error,
    onNewMessage: handleNewRequest,
  };
}
