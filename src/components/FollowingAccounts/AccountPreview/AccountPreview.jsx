import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Image from "~/components/Image";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <Image
                    className={cx("avatar")}
                    src={data.avatar}
                    alt={data.nickname}
                />
                {!data.is_followed && (
                    <Button className={cx("btn")} outline medium>
                        Follow
                    </Button>
                )}
            </header>
            <div className={cx("body")}>
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

                <p className={cx("analytics")}>
                    <strong className={cx("value")}>
                        {data.followers_count}
                    </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>{data.likes_count}</strong>
                    <span className={cx("label")}>Likes</span>
                </p>
                <p className={cx("bio")}>
                    We’re the internet’s moodboard - curating the best of art,
                    food & culture 😋👀✌️
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
