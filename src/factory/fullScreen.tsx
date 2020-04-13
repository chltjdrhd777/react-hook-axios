import React from "react";

export const useFullScreen = () => {
  const makeFull = React.createRef<HTMLImageElement>();
  const triggerFull = () => {
    if (makeFull.current) {
      makeFull.current.requestFullscreen();
    }
  };
  return { makeFull, triggerFull };
};
