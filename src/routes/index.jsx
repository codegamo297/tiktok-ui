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
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/explore", component: Explore },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/feedback", component: Feedback, layout: FullWidthLayout },
    { path: "/search", component: Search },
];

// PrivateRoutes Pages
const privateRoutes = [];

export { publicRoutes, privateRoutes };
