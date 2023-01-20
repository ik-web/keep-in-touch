export const getErrorMessage = (error) => {
  switch (error.status) {
    case 400:
      return "This page doesn't exist!";

    case 401:
      return "You aren't authorized to see this";

    case 404:
      return "Page not found...";

    case 418:
      return "...?"

    case 503:
      return "Looks like our API is down";

    default:
      return "Something went wrong";
  }
};
