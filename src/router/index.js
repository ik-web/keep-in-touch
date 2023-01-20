import { createHashRouter, RouterProvider } from "react-router-dom";

import {
  Auth,
  Community,
  Home
} from "pages";

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
  {
    path: "/community",
    element: <Community />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
