import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import "../styles/AdminSideBar.css";

const AdminSideBar = ({ onMenuSelect }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const menuItems = [
    { name: "Members", path: "/AdminDashboard" },
    { name: "Applicants", path: "/AdminApplicants" },
    { name: "Event", path: "/AdminEvents" },
    { name: "Articles", path: "/AdminArticales" },
    { name: "Knowledge", path: "/AdminKnowledge" },
  ];

  const handleClick = (item) => {
    navigate(item.path);
    if (onMenuSelect) onMenuSelect(item.name);
  };

  return (
    <div className="sidebar">
      <nav className="menu">
      <div className="menu-back">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`menu-item ${
              location.pathname === item.path ? "active-item" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      </nav>
    </div>
  );
};

export default AdminSideBar;
