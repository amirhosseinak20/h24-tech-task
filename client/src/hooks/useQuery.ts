import { useState, useCallback, useEffect } from "react";
import { request as graphqlRequest } from "graphql-request";
import { DocumentNode } from "graphql";
import { GRAPHQL_API_ENDPOINT } from "constants/env";
import { useLocation } from "react-router-dom";

const INITIAL_DATA: { data: any; isLoading: boolean; error: any } = {
  data: null,
  isLoading: false,
  error: null,
};

type ParamsType = {
  query: DocumentNode;
  onSuccess?: (res: any) => void;
  onError?: (error: any) => void;
  skip?: boolean;
  initialVariables?: Record<string, any>;
};
export function useQuery({ query, skip, initialVariables }: ParamsType) {
  const location = useLocation();
  const [{ data, error, isLoading }, setState] = useState(INITIAL_DATA);

  const setIsLoading = (isLoading: boolean) =>
    setState((prev) => ({ ...prev, isLoading }));
  const setData = (data: any) =>
    setState((prev) => ({ ...prev, isLoading: false, data }));
  const setError = (error: any) =>
    setState((prev) => ({ ...prev, isLoading: false, error }));

  const request = useCallback(
    async (variables: any) => {
      setIsLoading(true);
      try {
        const response = await graphqlRequest(
          GRAPHQL_API_ENDPOINT,
          query,
          variables
        );
        setData(response);
      } catch (e) {
        setError(e);
      }
    },
    // eslint-disable-next-line
    [setState, query]
  );

  useEffect(() => {
    setIsLoading(true);
    !skip && request(initialVariables);
    // eslint-disable-next-line
  }, [location]);

  return { request, data, error, isLoading };
}
