import ShowToast from "./ShowToast";

export const ShowFirebaseError = errorOBJ => {
  const errorMessage = errorOBJ?.message
    ?.split("/")[1]
    .split(")")[0]
    .toUpperCase();
  ShowToast("error", errorMessage);
};
