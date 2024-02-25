import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current?.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className={cx("search")}>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <div className={cx("search-title")}>Accounts</div>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            <div className={cx("view-results")}>
                                View all results for
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <Form method="post" action="/search" className={cx("form")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx("input")}
                        type="text"
                        placeholder="Search"
                        aria-controls
                        aria-label="Search"
                        aria-expanded={false}
                        aria-autocomplete="list"
                        spellCheck={false}
                        onChange={(e) => {
                            e.target.value = e.target.value.trimStart();
                            setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button
                            type="button"
                            className={cx("clear")}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />
                    )}

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
    );
}

export default Search;
