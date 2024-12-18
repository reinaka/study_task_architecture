import { App } from "@/components/App";
import { ShopPage } from "@/pages/ShopPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/shop',
            element: (
                <Suspense fallback={'...loading...'}>
                    <ShopPage />
                </Suspense>
            )

        }
      ]
    }
];

export const router = createBrowserRouter(routes);
export default routes;