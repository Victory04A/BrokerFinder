import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function AdminLayout() {
    return (
        <div className="layout layout--admin">
            <Sidebar />
            <main className="layout__main">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
