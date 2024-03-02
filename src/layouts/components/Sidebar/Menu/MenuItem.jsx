import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive, avatar }) {
    return (
        <NavLink
            to={to}
            className={(nav) => cx("menu-item", { active: nav.isActive })}
        >
            {icon ? (
                <>
                    <div className={cx("icon")}>{icon}</div>
                    <div className={cx("icon-active")}>{iconActive}</div>
                </>
            ) : (
                <Image src={avatar} className={cx("avatar")} />
            )}

            <span className={cx("title")}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    iconActive: PropTypes.node,
    avatar: PropTypes.string,
};

export default MenuItem;
