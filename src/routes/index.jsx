import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import ChatPage from "../pages/chatPage/ChatPage";
import RootLayout from "../layouts/rootLayout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import SignInPage from "../pages/signInPage/SignInPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
// create Router
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
      {},
    ],
  },
]);
export default router;
