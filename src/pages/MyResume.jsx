import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/myresume.css";
import {
    LuListFilter, LuSquarePen, LuCopyPlus, LuTrash2,
} from "react-icons/lu";
import { HiSparkles } from "react-icons/hi2";
import {
    FiSearch, FiSliders, FiPlus, FiEye, FiDownload,
    FiMoreVertical, FiEdit2, FiCopy, FiEdit3, FiTrash2,
} from "react-icons/fi";
import template from "../assets/images/template.png";

export default function MyResume() {
    const [openMenuId, setOpenMenuId] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = (id) => {
        setOpenMenuId((prev) => (prev === id ? null : id));
    };

    return (
        <>
            {/* New wrapper to prevent sidebar/topbar overlap */}
            <div className="resume-wrapper">
                {/* Top */}
                <div className="resume-top">
                    <h2>Your Creations</h2>
                    <div className="resume-actions">
                        <div className="search-box">
                            <FiSearch className="search-icon" />
                            <input type="text" placeholder="Search Resumes..." />
                        </div>
                        <button className="sort-btn">
                            <LuListFilter className="sort-icon" />
                            Sort
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="resume-grid">
                    {/* Create Card */}
                    <div
                        className="create-card"
                        onClick={() => navigate("/start")}
                    >
                        <div className="plus-circle">
                            <FiPlus className="plus-icon" />
                        </div>

                        <h3>Create Resume</h3>

                        <p>Start from a blank canvas</p>
                    </div>

                    {/* First Resume Card */}
                    <div className="resume-card">
                        <div className="resume-image">
                            <img src={template} alt="" />
                            <span className="optimized">
                                <HiSparkles className="optimized-icon" />
                                AI OPTIMIZED
                            </span>
                        </div>
                        <div className="resume-body">
                            <div className="resume-title">Product Manager Resume</div>
                            <div className="resume-info">
                                <span className="resume-date">Last edited 2d ago</span>
                                <span className="ats-score">
                                    <b>88</b> ATS SCORE
                                </span>
                            </div>
                            <div className="resume-buttons">
                                <button className="btn">
                                    <FiEye className="preview-icon" />
                                    Preview
                                </button>
                                <button className="download">
                                    <FiDownload className="download-icon" />
                                </button>
                                <button
                                    className="more"
                                    onClick={() => toggleMenu("card1")}
                                >
                                    <FiMoreVertical className="more-icon" />
                                </button>
                            </div>
                        </div>
                        {openMenuId === "card1" && (
                            <div className="resume-menu">
                                <div className="menu-itm">
                                    <div className="icon">
                                        <LuSquarePen className="edit-icon" />
                                    </div>
                                    <span className="menu-text">Edit</span>
                                </div>
                                <div className="menu-itm">
                                    <div className="icon">
                                        <LuCopyPlus className="duplicate-icon" />
                                    </div>
                                    <span className="menu-text">Duplicate</span>
                                </div>
                                <div className="menu-itm">
                                    <div className="icon">
                                        <FiEdit3 className="rename-icon" />
                                    </div>
                                    <span className="menu-text">Rename</span>
                                </div>
                                <div className="menu-itm delete">
                                    <div className="icon">
                                        <LuTrash2 className="delete-icon" />
                                    </div>
                                    <span className="menu-text delete-text">Delete Resume</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Second Resume Card */}
                    <div className="resume-card">
                        <div className="resume-image">
                            <img src={template} alt="" />
                            <span className="optimized">
                                <HiSparkles className="optimized-icon" />
                                AI OPTIMIZED
                            </span>
                        </div>
                        <div className="resume-body">
                            <div className="resume-title">Product Manager Resume</div>
                            <div className="resume-info">
                                <span className="resume-date">Last edited 2d ago</span>
                                <span className="ats-score">
                                    <b>88</b> ATS SCORE
                                </span>
                            </div>
                            <div className="resume-buttons">
                                <button className="btn">
                                    <FiEye className="preview-icon" />
                                    Preview
                                </button>
                                <button className="download">
                                    <FiDownload className="download-icon" />
                                </button>
                                <button
                                    className="more"
                                    onClick={() => toggleMenu("card2")}
                                >
                                    <FiMoreVertical className="more-icon" />
                                </button>
                            </div>
                        </div>
                        {openMenuId === "card2" && (
                            <div className="resume-menu">
                                <div className="menu-itm">
                                    <div className="icon">
                                        <LuSquarePen className="edit-icon" />
                                    </div>
                                    <span className="menu-text">Edit</span>
                                </div>
                                <div className="menu-itm">
                                    <div className="icon">
                                        <LuCopyPlus className="duplicate-icon" />
                                    </div>
                                    <span className="menu-text">Duplicate</span>
                                </div>
                                <div className="menu-itm">
                                    <div className="icon">
                                        <FiEdit3 className="rename-icon" />
                                    </div>
                                    <span className="menu-text">Rename</span>
                                </div>
                                <div className="menu-itm delete">
                                    <div className="icon">
                                        <LuTrash2 className="delete-icon" />
                                    </div>
                                    <span className="menu-text delete-text">Delete Resume</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Draft Card */}
                    <div className="resume-card">
                        <div className="resume-image">
                            <img src={template} alt="" />
                            <span className="draft">DRAFT</span>
                        </div>
                        <div className="resume-body">
                            <div className="resume-title">Product Manager Resume</div>
                            <span className="resume-date">Last edited 2d ago</span>
                            <div className="resume-progress">
                                <div className="resume-progress-fill"></div>
                            </div>
                            <div className="resume-progress-info">
                                <span className="progress-text">95% Complete</span>
                                <button className="continue-button">
                                    Continue Editing
                                    <span className="arrow">&gt;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}