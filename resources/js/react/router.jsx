import {
    Outlet,
    Link,
    createBrowserRouter,
    RouterProvider,
    useNavigation,
} from "react-router-dom";

import App from "./App";
import Main from "./components/Main";
import Test from "./components/Test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Test />,
        children: [
            {
                index: true,
                path: "main",
                element: <Main />,
            },
            /*{
                path: "about",
                // Single route in lazy file
                lazy: () => import("./pages/About"),
            },
            {
                path: "dashboard",
                async lazy() {
                    // Multiple routes in lazy file
                    let { DashboardLayout } = await import("./pages/Dashboard");
                    return { Component: DashboardLayout };
                },
                children: [
                    {
                        index: true,
                        async lazy() {
                            let { DashboardIndex } = await import("./pages/Dashboard");
                            return { Component: DashboardIndex };
                        },
                    },
                    {
                        path: "messages",
                        async lazy() {
                            let { dashboardMessagesLoader, DashboardMessages } = await import(
                                "./pages/Dashboard"
                                );
                            return {
                                loader: dashboardMessagesLoader,
                                Component: DashboardMessages,
                            };
                        },
                    },
                ],
            },*/
            {
                path: "*",
                element: <Main />,
            },
        ],
    },
    {
        path: "main",
        element: <Main />
    }
]);

export default router;
