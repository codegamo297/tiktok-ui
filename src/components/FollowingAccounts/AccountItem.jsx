// import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./FollowingAccounts.module.scss";
import Image from "~/components/Image";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <Image
                        src="https://i.pinimg.com/474x/79/19/e9/7919e9094ed1deea01b56e90e141fa9e.jpg"
                        className={cx("avatar")}
                    />
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>dotathieu0729</strong>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx("check")}
                            />
                        </p>
                        <p className={cx("name")}>Đỗ Tất Hiếu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
