import { App } from "@/components/App";
import { ContactsPage } from "@/pages/ContantsPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/contacts',
            element: (
                <Suspense fallback={'...loading...'}>
                    <ContactsPage />
                </Suspense>
            )

        }
      ]
    }
];

export const router = createBrowserRouter(routes);
export default routes;