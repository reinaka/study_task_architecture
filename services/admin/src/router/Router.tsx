import { App } from "@/components/App";
import { AdminPage } from "@/pages/AdminPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/admin',
            element: (
                <Suspense fallback={'...loading...'}>
                    <AdminPage />
                </Suspense>
            )

        }
      ]
    }
];

export const router = createBrowserRouter(routes);
export default routes;