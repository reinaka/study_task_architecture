import { App } from "@/components/App";
import { OrderPage } from "@/pages/OrderPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/order',
            element: (
                <Suspense fallback={'...loading...'}>
                    <OrderPage />
                </Suspense>
            )

        }
      ]
    }
];

export const router = createBrowserRouter(routes);
export default routes;