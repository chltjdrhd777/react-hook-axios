/* eslint-disable react-hooks/rules-of-hooks */
import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const makingHttpRequest = (
  options: any,
  axiosInstance = defaultAxios
) => {
  //check whether the I get a URl
  if (!options.url) {
    return;
  }

  //setting and update
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  //refetch////////////////////////////////
  //useEffect will get a dependency on trigger.
  //whenever trigger is changed, useEffect would run again
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setTrigger(Date.now());
    setState({ ...state, loading: true });
  };
  /////////////////////////////////////

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axiosInstance(options)
      .then((data: any) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
  return { ...state, refetch };
};
