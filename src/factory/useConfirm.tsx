export const useConfirm = (message: string, getRidOf: any, remain: any) => {
  //if(!getRidof) = if getRidOf doesn't exist
  if (!getRidOf || typeof getRidOf !== "function") {
    return;
  }
  if (!remain || typeof remain !== "function") {
    return;
  }

  //confirm("string") => pop the message box that read "string"
  //confirm's type = boolean(when clicked ok = true, the opposite = false)
  const check = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      return getRidOf();
    } else {
      return remain();
    }
  };
  return check;
};
