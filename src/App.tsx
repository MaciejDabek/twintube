import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Feed from "./pages/Feed";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
