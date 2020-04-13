// window.addEventListener('beforeunload' , function) <== before user go out from the present page, the function would work
// event.returnValeu ="" is kind of a rule in chrome to use preventLeave
const warning = (event: any) => {
  event.preventDefault();
  console.log("are you sure?");
  event.returnValue = "";
};

export const preventEventer = () => {
  const enablePrevent = () => window.addEventListener("beforeunload", warning);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", warning);

  return { enablePrevent, disablePrevent };
};
