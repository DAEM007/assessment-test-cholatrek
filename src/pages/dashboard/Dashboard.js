
// All styles import
import "./Dashboard.css";
// All assets import
import NotifyNav from "../../assets/notify-nav.png";
import ProfilePic from "../../assets/profile-pic.png";
import CaseIcon from "../../assets/regulation-1.png";
import decreaseIcon from "../../assets/decrease.png";
import increaseIcon from "../../assets/increase.png";
import File from "../../assets/file.png";
import Talk from "../../assets/talk.png";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="navbar">
                <img className="notify-nav" src={NotifyNav} alt="notification" />
                <img src={ProfilePic} alt="profile-pic" />
            </div>
            <div>Dashboard</div>
            <div className="cards">
                <div className="card">
                    <div className="card-heading">
                        Number of Assigned Cases
                    </div>
                    <div className="number-icon">
                        <span className="card-number">
                            119
                        </span>
                        <span className="card-icon">
                            <img src={CaseIcon} width="50px" height="50px" alt="case-icon" />
                        </span>
                    </div>
                    <div className="decrease-increase">
                        <span className="decrease">
                            <img src={decreaseIcon} alt="decrease-icon" />
                                25
                            <span className="red">Ongoing</span>
                        </span>
                        <span className="increase">
                            <img src={increaseIcon} alt="increase-icon" /> 
                                75
                            <span className="green">Closed</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading">
                        Number of Approved Files
                    </div>
                    <div className="number-icon">
                        <span className="card-number">
                            89
                        </span>
                        <span className="card-icon">
                            <img src={File} width="50px" height="50px" alt="case-icon" />
                        </span>
                    </div>
                    <div className="decrease-increase">
                        <span className="decrease">
                            <img src={decreaseIcon} alt="decrease-icon" />
                                25
                            <span className="red">Waiting Approval</span>
                        </span>
                        <span className="increase">
                            <img src={increaseIcon} alt="increase-icon" /> 
                                75
                            <span className="green">Approved</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading">
                        Number of Counsel
                    </div>
                    <div className="number-icon">
                        <span className="card-number">
                            50
                        </span>
                        <span className="card-icon">
                            <img src={Talk} width="50px" height="50px" alt="case-icon" />
                        </span>
                    </div>
                    <div className="decrease-increase">
                        <span className="decrease">
                            <img src={decreaseIcon} alt="decrease-icon" />
                                25
                            <span className="red">Ongoing</span>
                        </span>
                        <span className="increase">
                            <img src={increaseIcon} alt="increase-icon" /> 
                                75
                            <span className="green">Closed</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;