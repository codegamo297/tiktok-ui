import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Image.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const Image = forwardRef(function Images(
    {
        src,
        alt,
        className,
        fallback: customFallback = images.noImage,
        ...props
    },
    ref
) {
    const [fallback, setFallback] = useState("");
    const classes = cx("wrapper", className);

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classes}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
