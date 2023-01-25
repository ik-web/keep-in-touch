import { createHashRouter, RouterProvider } from "react-router-dom";

import {
  Auth,
  Home,
  Community,
  Profile,
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
  {
    path: "/profile/:profileId",
    element: <Profile />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
