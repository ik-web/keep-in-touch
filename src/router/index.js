import { createHashRouter } from "react-router-dom";
import { Auth } from "pages/Auth copy";

export const router = createHashRouter([
  {
    path: "/",
    element: <Auth />,
  },
]);