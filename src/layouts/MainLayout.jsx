import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
    return (
        <div className="layout">
            <Navbar />
            <main className="layout__main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
