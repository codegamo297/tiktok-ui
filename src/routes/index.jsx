import config from "~/config";

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
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    {
        path: config.routes.feedback,
        component: Feedback,
        layout: FullWidthLayout,
    },
    { path: config.routes.search, component: Search },
];

// PrivateRoutes Pages
const privateRoutes = [];

export { publicRoutes, privateRoutes };
