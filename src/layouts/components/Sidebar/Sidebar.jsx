import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import config from "~/config";
import {
    CameraActiveIcon,
    CameraIcon,
    CompassActiveIcon,
    CompassIcon,
    HomeActiveIcon,
    HomeIcon,
    UserArrowActiveIcon,
    UserArrowIcon,
    UsersActiveIcon,
    UsersIcon,
} from "~/components/Icons";
import Menu, { MenuItem } from "~/layouts/components/Sidebar/Menu";
import FollowingAccounts from "~/components/FollowingAccounts";
import * as userService from "~/services/userService";
import Footer from "./Footer";

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 10;

function Sidebar() {
    const [followingUsers, setFollowingUsers] = useState([]);

    const isLoading = useRef(false);

    useEffect(() => {
        // Sử dụng useRef để tránh gọi 2 lần để gây trùng dữ liệu
        if (isLoading.current) {
            userService
                .getSuggested({ page: INIT_PAGE, perPage: PER_PAGE })
                .then((data) => {
                    setFollowingUsers((prevUsers) => [...prevUsers, ...data]);
                })
                .catch((error) => console.log(error));
        }

        return () => {
            isLoading.current = true;
        };
    }, []);

    return (
        <div className={cx("wrapper")}>
            <aside className={cx("container")}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        iconActive={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserArrowIcon />}
                        iconActive={<UserArrowActiveIcon />}
                    />
                    <MenuItem
                        title="Friends"
                        to={config.routes.friends}
                        icon={<UsersIcon />}
                        iconActive={<UsersActiveIcon />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<CompassIcon />}
                        iconActive={<CompassActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<CameraIcon height="2.6rem" width="2.6rem" />}
                        iconActive={<CameraActiveIcon />}
                    />
                    <MenuItem
                        title="Profile"
                        to="/@dotathieu0729"
                        avatar="https://i.pinimg.com/474x/79/19/e9/7919e9094ed1deea01b56e90e141fa9e.jpg"
                    />
                </Menu>

                <FollowingAccounts data={followingUsers} />

                <Footer />
            </aside>
        </div>
    );
}

export default Sidebar;
