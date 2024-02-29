import { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // Trường hợp ko có phần children (hay nó kp là parent thì xử lý ntn,
                            // trừ mấy cái dẫn đến trang khác như /live)
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBack} />
                )}
                <ul className={cx("menu-body")}>{renderItems()}</ul>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[10, 10]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
