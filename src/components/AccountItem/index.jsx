import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-phong-c-nh-dan-ba-ng-i-d-ng-c.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Hoa"
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <div>
                    <h4 className={cx("username")}>
                        <span>hooa123</span>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx("check")}
                        />
                    </h4>
                    <p className={cx("name")}>Đào Lê Phương Hoa</p>
                </div>
                <FontAwesomeIcon className={cx("option")} icon={faEllipsis} />
            </div>
        </div>
    );
}

export default AccountItem;
