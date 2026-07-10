import { FiMenu } from "react-icons/fi";

export default function Topbar({ toggleSidebar }) {

    return (

        <header className="topbar">

            <button
                className="mobile-menu-btn"
                onClick={toggleSidebar}
            >
                <FiMenu />

            </button>

            <h2>Resume Builder</h2>

        </header>

    );

}