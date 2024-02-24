import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Form } from "react-router-dom";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
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
        to: "/feedback",
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
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
            to: "/profile",
        },
        {
            icon: <FavoriteIcon />,
            title: "Favorites",
            to: "/profile",
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
                    <Link to={"/"} className={cx("logo")}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search */}
                <div className={cx("search")}>
                    <HeadlessTippy
                        visible={searchResult.length > 0}
                        interactive={true}
                        render={(attrs) => (
                            <div
                                className={cx("search-result")}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <div className={cx("search-title")}>
                                        Accounts
                                    </div>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <div className={cx("view-results")}>
                                        View all results for
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <Form
                            method="post"
                            action="/search"
                            className={cx("form")}
                        >
                            <input
                                className={cx("input")}
                                type="text"
                                placeholder="Search"
                                aria-controls
                                aria-label="Search"
                                aria-expanded={false}
                                aria-autocomplete="list"
                                spellCheck={false}
                            />
                            <button type="button" className={cx("clear")}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className={cx("loading")}
                                icon={faSpinner}
                            />

                            <span className={cx("separate")}></span>
                            <button
                                className={cx("search-btn")}
                                type="submit"
                                aria-label="Search"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Form>
                    </HeadlessTippy>
                </div>

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
                                src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600"
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
