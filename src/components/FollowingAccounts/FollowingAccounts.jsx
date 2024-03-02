import classNames from "classnames/bind";

import styles from "./FollowingAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function FollowingAccounts() {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("label")}>Following Accounts</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx("more-btn")}>See more</p>
        </div>
    );
}

export default FollowingAccounts;
