import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link className={cx("wrapper")} to={`/@${data.nickname}`}>
            <Image
                src={data.avatar}
                alt={data.full_name}
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <div>
                    <h4 className={cx("username")}>
                        <span>{data.nickname}</span>
                        {data.tick && (
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx("check")}
                            />
                        )}
                    </h4>
                    <p className={cx("name")}>{data.full_name}</p>
                </div>
                <FontAwesomeIcon className={cx("option")} icon={faEllipsis} />
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
