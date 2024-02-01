import { Link } from "react-router-dom";
import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";

function Error() {
    return (
        <>
            <Header />
            <div>
                <p>
                    <span>4</span>
                    <img src="/smiley-face.png" alt="" />
                    <span>4</span>
                </p>
                <p>Không thể tìm thấy trang này</p>
                <Link to={"/"}>Trang chủ</Link>
            </div>
            <Footer />
        </>
    );
}

export default Error;
