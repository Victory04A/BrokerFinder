import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import BrokerLayout from "./layouts/BrokerLayout";
import ClientLayout from "./layouts/ClientLayout";

import Home from "./pages/Home";
import Brokers from "./pages/Brokers";
import BrokerDetails from "./pages/BrokerDetails";
import Login from "./pages/login";
import Register from "./pages/Register";
import RequestService from "./pages/RequestService";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBrokers from "./pages/admin/ManageBrokers";
import ManageUsers from "./pages/admin/ManageUsers";
import Request from "./pages/admin/Request";

import BrokerDashboard from "./pages/broker/BrokerDashboard";
import BrokerRequest from "./pages/broker/BrokerRequest";
import MyRequest from "./pages/broker/MyRequest";

import ClientDashboard from "./pages/client/ClientDashboard";
import ClientMyRequest from "./pages/client/MyRequest";
import Profile from "./pages/client/Profile";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="brokers" element={<Brokers />} />
                    <Route path="brokers/:id" element={<BrokerDetails />} />
                    <Route path="request-service" element={<RequestService />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="about" element={<About />} />

                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="brokers" element={<ManageBrokers />} />
                    <Route path="users" element={<ManageUsers />} />
                    <Route path="requests" element={<Request />} />
                </Route>

                <Route path="/broker" element={<BrokerLayout />}>
                    <Route index element={<BrokerDashboard />} />
                    <Route path="requests" element={<MyRequest />} />
                    <Route path="requests/new" element={<BrokerRequest />} />
                </Route>

                <Route path="/client" element={<ClientLayout />}>
                    <Route index element={<ClientDashboard />} />
                    <Route path="requests" element={<ClientMyRequest />} />
                    <Route path="profile" element={<Profile />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
