import React, { useEffect } from "react";

export const useAnimation = (duration: number, delay: number) => {
  const element = React.createRef<HTMLHeadingElement>();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = "1";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //return {ref: , style: , onClick : .......} it is very useful
  //in const App, I can discharge them all by typing like <h1 {...useAnimation}></h1>
  return { ref: element, style: { opacity: 0 } };
};
