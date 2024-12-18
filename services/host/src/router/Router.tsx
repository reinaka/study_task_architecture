import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App";
//@ts-ignore
import shopRoutes from 'shop/Router';
//@ts-ignore
import adminRoutes from 'admin/Router';
//@ts-ignore
import contactsRoutes from 'contacts/Router';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        ...shopRoutes,
        ...adminRoutes,
        ...contactsRoutes
      ]
    }
]);