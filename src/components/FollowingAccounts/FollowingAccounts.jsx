import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./FollowingAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function FollowingAccounts({ data = [] }) {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("label")}>Following Accounts</h2>

            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx("more-btn")}>See more</p>
        </div>
    );
}

FollowingAccounts.propTypes = {
    data: PropTypes.array,
};

export default FollowingAccounts;
