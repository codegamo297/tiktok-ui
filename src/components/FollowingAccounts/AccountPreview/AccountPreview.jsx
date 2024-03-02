import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Image from "~/components/Image";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <Image
                    src="https://i.pinimg.com/474x/79/19/e9/7919e9094ed1deea01b56e90e141fa9e.jpg"
                    className={cx("avatar")}
                />
                <Button className={cx("btn")} outline medium>
                    Follow
                </Button>
            </header>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>dotathieu0729</strong>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("check")}
                    />
                </p>
                <p className={cx("name")}>Đỗ Tất Hiếu</p>

                <p className={cx("analytics")}>
                    <strong className={cx("value")}>8.2M</strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>232.2M</strong>
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

export default AccountPreview;
