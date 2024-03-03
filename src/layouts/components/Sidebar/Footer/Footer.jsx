import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import Image from "~/components/Image";
import images from "~/assets/images";
import config from "~/config";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("effect")}>
                <Link to={config.routes.effect}>
                    <Image src={images.rewardBg} className={cx("background")} />
                    <div className={cx("text-wrapper")}>
                        <p className={cx("text")}>
                            Create TikTok effects, get a reward
                        </p>
                    </div>
                </Link>
            </div>
            <div className={cx("body")}>
                <div className={cx("about")}>
                    <Link
                        to="https://www.tiktok.com/about?lang=en"
                        target="blank"
                    >
                        About
                    </Link>
                    <Link to="https://newsroom.tiktok.com/" target="blank">
                        Newsroom
                    </Link>
                    <Link
                        to="https://www.tiktok.com/about/contact?lang=en"
                        target="blank"
                    >
                        Contact
                    </Link>
                    <Link to="https://careers.tiktok.com" target="blank">
                        Careers
                    </Link>
                </div>
                <div className={cx("advertise")}>
                    <Link to="https://www.tiktok.com/forgood" target="blank">
                        TikTok for Good
                    </Link>
                    <Link
                        to="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web"
                        target="blank"
                    >
                        Advertise
                    </Link>
                    <Link
                        to="https://www.tiktok.com/live/creator-networks/en?enter_from=tiktok_official"
                        target="blank"
                    >
                        TikTok LIVE Creator Networks
                    </Link>
                    <Link
                        to="https://developers.tiktok.com/?refer=tiktok_web"
                        target="blank"
                    >
                        Developers
                    </Link>
                    <Link
                        to="https://www.tiktok.com/transparency"
                        target="blank"
                    >
                        Transparency
                    </Link>
                    <Link
                        to="https://www.tiktok.com/tiktok-rewards/en"
                        target="blank"
                    >
                        TikTok Rewards
                    </Link>
                    <Link to="https://www.tiktok.com/embed" target="blank">
                        TikTok Embeds
                    </Link>
                </div>
                <div className={cx("policy")}>
                    <Link to="https://support.tiktok.com/en" target="blank">
                        Help
                    </Link>
                    <Link
                        to="https://www.tiktok.com/safety?lang=en"
                        target="blank"
                    >
                        Safety
                    </Link>
                    <Link
                        to="https://www.tiktok.com/legal/terms-of-service?lang=en"
                        target="blank"
                    >
                        Terms
                    </Link>
                    <Link
                        to="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
                        target="blank"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        to="https://www.tiktok.com/privacy/overview/en?enter_method=webapp_desktop"
                        target="blank"
                    >
                        Privacy Center
                    </Link>
                    <Link
                        to="https://www.tiktok.com/creators/creator-portal/en-us/"
                        target="blank"
                    >
                        Creator Portal
                    </Link>
                    <Link
                        to="https://www.tiktok.com/community-guidelines?lang=en"
                        target="blank"
                    >
                        Community Guidelines
                    </Link>
                </div>
                <p className={cx("copyright")}>© 2024 TikTok</p>
            </div>
        </div>
    );
}

export default Footer;
