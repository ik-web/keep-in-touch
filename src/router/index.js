import { createHashRouter, RouterProvider } from "react-router-dom";

import {
  Auth,
  Home,
  Messaging,
  Network,
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
    path: "/messaging/:dialogId?",
    element: <Messaging />,
  },
  {
    path: "/network",
    element: <Network />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/profile/:profileId?",
    element: <Profile />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
