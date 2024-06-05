import {
    Outlet,
    Link,
    createBrowserRouter,
    RouterProvider,
    useNavigation,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    /*children: [
        {
            index: true,
            path: "main",
            element: <Main />,
        },
        /*{
            path: "aut",
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
        },
            {
                path: "*",
                element: <Main />,
            },
        ],*/
    },
    /*{
        path: "main",
        element: <Main />
    }*/
]);

export default router;
