import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import {
    CameraIcon,
    CircleQuestionIcon,
    CoinTiktokIcon,
    CreativeIcon,
    FavoriteIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    MoonIcon,
    NotifyIcon,
    SettingIcon,
    UserIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";
import config from "~/config";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <CreativeIcon />,
        title: "LIVE Creator Hub",
        to: "/live",
    },
    {
        icon: <LanguageIcon />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <CircleQuestionIcon />,
        title: "Feedback and help",
        to: config.routes.feedback,
    },
    {
        icon: <KeyboardIcon />,
        title: "Keyboard shortcuts",
    },
    {
        icon: <MoonIcon />,
        title: "Dark mode",
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: "View profile",
            to: "/@dotathieu",
        },
        {
            icon: <FavoriteIcon />,
            title: "Favorites",
            to: "/@dotathieu",
        },
        {
            icon: <CoinTiktokIcon />,
            title: "Get Coins",
            to: "/coin",
        },
        {
            icon: <CameraIcon />,
            title: "Live Studio",
            to: "/studio",
        },
        {
            icon: <SettingIcon />,
            title: "Settings",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: "Log out",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Header Logo */}
                <div className={cx("left")}>
                    <Link to={config.routes.home} className={cx("logo")}>
                        <Image src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                {/* Action */}
                <div className={cx("actions")}>
                    <Button
                        outlineGray
                        medium
                        className={cx("upload")}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>

                    {/* Xử lý trường hợp đăng nhập để hiển thị layout */}
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                content="Messages"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon
                                        className={cx("action-icon")}
                                    />
                                    <span className={cx("badge")}>3</span>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <NotifyIcon className={cx("action-icon")} />
                                    <span className={cx("badge")}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://i.pinimg.com/474x/79/19/e9/7919e9094ed1deea01b56e90e141fa9e.jpg"
                                alt="Đỗ Tất Hiếu"
                                fallback="https://mighty.tools/mockmind-api/content/human/65.jpg"
                            />
                        ) : (
                            <button className={cx("icon-options")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
