import { useState, useCallback, useEffect } from "react";

import { request as apiRequest } from "utils/api";

const INITIAL_DATA = {
  data: null,
  isLoading: false,
  error: null,
};

type ParamsType = {
  query: string;
  onSuccess?: (res: any) => void;
  onError?: (error: any) => void;
  skip?: boolean;
};
export function useQuery({ query, onSuccess, onError, skip }: ParamsType) {
  const [{ data, isLoading, error }, setData] = useState(INITIAL_DATA);

  const handleSuccess = useCallback(
    (data: any) => {
      setData((prevData) => ({ ...prevData, data, isLoading: false }));
    },
    [setData]
  );
  const handleError = useCallback(
    (error: any) => {
      setData((prevData) => ({ ...prevData, isLoading: false, error }));
    },
    [setData]
  );

  const request = useCallback(() => {
    setData((prevData) => ({ ...prevData, isLoading: true }));
    apiRequest({ query, onSuccess: handleSuccess, onError: handleError });
  }, [setData, query]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (data) {
      onSuccess?.(data);
    }
    if (error) {
      onError?.(error);
    }
  }, [data, isLoading, error]);

  useEffect(() => {
    !skip && request();
  }, []);

  return { data, isLoading, error, request };
}
