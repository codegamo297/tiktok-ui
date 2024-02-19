import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Form } from "react-router-dom";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

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
                <div className={cx("action")}></div>
            </div>
        </header>
    );
}

export default Header;
