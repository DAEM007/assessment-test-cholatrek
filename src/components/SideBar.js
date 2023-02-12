// All styles
import { NavLink } from "react-router-dom";
// All styles
import "./SideBar.css";
// All assets import
import Logo from "../assets/logo.png";
import DashboardIcon from "../assets/category.png";
import RegistrarIcon from "../assets/Icon.png";
import DocumentTextIcon from "../assets/document-text.png";
import PerformanceIcon from "../assets/Group.png";
import CaseIcon from "../assets/case-icon.png";
import NotificationIcon from "../assets/notification.png";
import ProfileIcon from "../assets/profile-circle.png";
import CounselIcon from "../assets/messages-2.png";
import FirmIcon from "../assets/bank.png";
import LogoutIcon from "../assets/logout.png";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <NavLink end to="/">
                            <img src={DashboardIcon} alt="dashboard-icon" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            <img src={RegistrarIcon} alt="registrar-icon" />
                            <span>Registrars</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pending">
                            <img src={DocumentTextIcon} alt="pending-icon" />
                            <span>Pending Files</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/performance">
                            <img src={PerformanceIcon} alt="performance-icon" />
                            <span>My Performance</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/case">
                            <img src={CaseIcon} alt="case-icon" />
                            <span>Track a Case</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification">
                            <img src={NotificationIcon} alt="notification-icon" />
                            <span>Notifications</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">
                            <img src={ProfileIcon} alt="profile-icon" />
                            <span>Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/counsel">
                            <img src={CounselIcon} alt="counsel-icon" />
                            <span>Counsel</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/firm">
                            <img src={FirmIcon} alt="firm-icon" />
                            <span>All firm</span>   
                        </NavLink>
                    </li>
                    <div className="logout">
                        <NavLink to="/signIn">
                            <img src={LogoutIcon} alt="logout-icon" />
                            <span>Logout</span>
                        </NavLink>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;