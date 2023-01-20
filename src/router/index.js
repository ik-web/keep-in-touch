import { createHashRouter, RouterProvider } from "react-router-dom";

import {
  Auth,
  Home,
  Community,
  Error,
} from "pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
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
