import { useEffect } from "react";

export const useBeforeLeave = () => {
  const mouseEvent = (event: any) => {
    //about mouseleave, there is an object which contains a lot of stuff, especially coordinates.
    const { clientY } = event;
    if (clientY <= 0) {
      console.log("don't leave");
    }
  };

  useEffect(() => {
    //componentDidmount
    document.addEventListener("mouseleave", mouseEvent);

    //componentWillUnmount
    return () => {
      document.removeEventListener("mouseleave", mouseEvent);
    };
  }, []);
};
