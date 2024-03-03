import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./FollowingAccounts.module.scss";
import Image from "~/components/Image";
import AccountPreview from "./AccountPreview";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom-end"
                render={renderPreview}
            >
                <Link className={cx("account-item")} to={`/@${data.nickname}`}>
                    <Image
                        className={cx("avatar")}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>{data.nickname}</strong>
                            {data.tick && (
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className={cx("check")}
                                />
                            )}
                        </p>
                        <p className={cx("name")}>
                            {`${data.first_name} ${data.last_name}`}
                        </p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
