import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
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
    CircleQuestionIcon,
    CreativeIcon,
    KeyboardIcon,
    LanguageIcon,
    MoonIcon,
} from "~/components/Icons";

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

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
                    <Tippy
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
                    </Tippy>
                </div>

                {/* Action */}
                <div className={cx("action")}>
                    <Button
                        outlineGray
                        medium
                        className={cx("upload")}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx("icon-options")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
