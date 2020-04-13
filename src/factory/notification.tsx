export const notificationAPI = (title: any, options: any) => {
  //Checking whether or not there is a Notification in window(in other words, supporting)
  if (!("Notification" in window)) {
    return;
  }
  //Notification.permission has three options = 1. granted 2. denied 3. defualt
  //Notification(title, options) = title(the title of notificaiton), options(custom settings)
  const noteIf = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return noteIf;
};
