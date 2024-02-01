import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FullWidthLayout({ children }) {
    return (
        <>
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
            <Footer />
        </>
    );
}

FullWidthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FullWidthLayout;
