import { Fragment } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { publicRoutes } from "~/routes";
import Error from "./pages/Error";
import DefaultLayout from "~/layouts";

const router = createBrowserRouter(
    createRoutesFromElements([
        publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }

            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                    errorElement={<Error />}
                />
            );
        }),
    ])
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
