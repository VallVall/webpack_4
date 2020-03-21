import React from "react";

import { People } from "@interfaces";

export const useFetch = <T>(
  fn: (index?: string) => Promise<T>,
  index?: string | undefined
): [T | null, boolean, boolean] => {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  const getData = async () => {
    setIsLoading(true);
    setIsError(false);

    let data: T | null = null;
    try {
      data = await fn(index);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }

    setData(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, [index]);

  return [data, isLoading, isError];
};
