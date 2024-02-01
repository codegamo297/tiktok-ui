import PropTypes from "prop-types";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
