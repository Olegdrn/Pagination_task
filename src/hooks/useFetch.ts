import { useEffect, useState } from "react";
import { Post } from "../../types";

export function UseFetch<T, P>(url: string, depends?: T) {
  const [data, setData] = useState<P>();
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

  //Вариант с async await:
  // useEffect(async () => {
  //   const dataJson = await fetch(data);
  //   const finalData = await dataJson.json();
  //   setmessageList(finalData);
  //   setIsLoading(false);
  // }, []);

  //Вариант с then:

  //Abort controller
  // useEffect(() => {
  //   const abortCont = new AbortController();
  //   setTimeout(() => {
  //     fetch(url, { signal: abortCont.signal })
  //       .then((res) => {
  //         return res.json()
  //       })
  //       .then((res) => {
  //         setData(res);
  //         setIsLoading(false);
  //       })
  //       .catch(error => {
  //         if (error.name === 'AbortError') {
  //           console.log('fetch aborted')
  //         } else {
  //           setError(true)
  //         }
  //       })
  //   }, 1000);
  //   return () => abortCont.abort();
  // }, [url])
  // return { data, isLoading, error }
}
