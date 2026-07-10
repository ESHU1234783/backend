import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DefaultLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (

        <div className="layout">

            <Sidebar
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
            />

            {
                sidebarOpen && (

                    <div
                        className="sidebar-overlay"
                        onClick={toggleSidebar}
                    />

                )
            }

            <div className="main-content">

                <Topbar
                    toggleSidebar={toggleSidebar}
                />

                <div className="page-content">

                    {children}

                </div>

            </div>

        </div>

    );

}