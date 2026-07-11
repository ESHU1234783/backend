import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";
import profileImage from "../assets/images/profile.png";

import {
    FiChevronDown,
    FiChevronRight,
    FiChevronUp,
    FiX,
    FiUser,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";

import menuData from "./menuData";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {

    const location = useLocation();

    const [open, setOpen] = useState("Resume Builder");
    const [profileOpen, setProfileOpen] = useState(false);


    return (

        <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>

            {/* ================= Logo ================= */}

            <div>

                <div className="sidebar-top">

                    <div className="sidebar-logo">

                        <img
                            src={logo}
                            alt="Logo"
                        />

                    </div>

                    <button
                        className="close-sidebar-btn"
                        onClick={toggleSidebar}
                    >
                        <FiX />
                    </button>

                </div>

                {/* ================= Menu ================= */}

                <nav className="sidebar-menu">

                    {

                        menuData.map((item) => {

                            const Icon = item.icon;

                            if (item.children) {

                                return (

                                    <div key={item.id}>

                                        <button

                                            className="menu-item active"

                                            onClick={() =>
                                                setOpen(
                                                    open === item.title
                                                        ? ""
                                                        : item.title
                                                )
                                            }

                                        >

                                            <span className="menu-left">

                                                <Icon />

                                                <span>{item.title}</span>

                                            </span>

                                            {

                                                open === item.title

                                                    ?

                                                    <FiChevronDown />

                                                    :

                                                    <FiChevronRight />

                                            }

                                        </button>

                                        {

                                            open === item.title &&

                                            <div className="submenu">

                                                {

                                                    item.children.map((child) => {

                                                        return (
                                                            <NavLink
                                                                key={child.id}
                                                                to={child.path}
                                                                className={() => {

                                                                    let isChildActive = false;

                                                                    if (child.title === "Create Resume") {

                                                                        isChildActive =
                                                                            location.pathname === "/resume-builder" ||
                                                                            location.pathname === "/resume-builder/start" ||
                                                                            location.pathname === "/resume-builder/personal-info";

                                                                    } else if (child.title === "My Resume") {

                                                                        isChildActive =
                                                                            location.pathname === "/my-resume";

                                                                    }

                                                                    return isChildActive
                                                                        ? "submenu-item active"
                                                                        : "submenu-item";
                                                                }}
                                                            >
                                                                {child.title}
                                                            </NavLink>
                                                        );
                                                    })

                                                }

                                            </div>

                                        }

                                    </div>

                                );

                            }

                            return (

                                <NavLink

                                    key={item.id}

                                    to={item.path}

                                    className={({ isActive }) =>

                                        isActive

                                            ?

                                            "menu-item active"

                                            :

                                            "menu-item"

                                    }

                                >

                                    <span className="menu-left">

                                        <Icon />

                                        <span>{item.title}</span>

                                    </span>

                                </NavLink>

                            );

                        })

                    }

                </nav>

            </div>

            {/* ================= Profile ================= */}

            <div className="sidebar-bottom">

                <div

                    className="sidebar-profile"

                    onClick={() => setProfileOpen(!profileOpen)}

                >

                    <div className="profile-left">

                        <img

                            src={profileImage}

                            alt="Profile"

                            className="profile-avatar"

                        />

                        <div className="profile-info">

                            <div className="profile-name">

                                Rohit

                                <span className="profile-badge">

                                    PRO

                                </span>

                            </div>

                            <div className="profile-progress">

                                Complete Profile

                                <span>

                                    42%

                                </span>

                            </div>

                        </div>

                    </div>

                    <button className="profile-toggle">

                        {

                            profileOpen

                                ?

                                <FiChevronDown />

                                :

                                <FiChevronUp />

                        }

                    </button>

                </div>

                {

                    profileOpen && (

                        <div className="profile-dropdown">

                            <NavLink

                                to="/profile"

                                className="profile-dropdown-item"

                            >

                                <FiUser />

                                <span>

                                    My Profile

                                </span>

                            </NavLink>

                            <NavLink

                                to="/settings"

                                className="profile-dropdown-item"

                            >

                                <FiSettings />

                                <span>

                                    Settings

                                </span>

                            </NavLink>

                            <button

                                className="profile-dropdown-item logout-btn"

                            >

                                <FiLogOut />

                                <span>

                                    Logout

                                </span>

                            </button>

                        </div>

                    )

                }

            </div>

        </aside>

    );

}