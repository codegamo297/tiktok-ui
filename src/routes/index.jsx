import routesConfig from "~/config/routes";

// Layouts
import { HeaderOnly, FullWidthLayout } from "~/layouts";

// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Explore from "~/pages/Explore";
import Upload from "~/pages/Upload";
import Feedback from "~/pages/Feedback";
import Search from "~/pages/Search";

// Public Routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.explore, component: Explore },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    {
        path: routesConfig.feedback,
        component: Feedback,
        layout: FullWidthLayout,
    },
    { path: routesConfig.search, component: Search },
];

// PrivateRoutes Pages
const privateRoutes = [];

export { publicRoutes, privateRoutes };
