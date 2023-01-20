import { createHashRouter, RouterProvider } from "react-router-dom";

import { Auth, Home } from "pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
