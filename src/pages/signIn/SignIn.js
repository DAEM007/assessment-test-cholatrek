// All react imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// All styles import
import "./SignIn.css";
// All assets import
import Logo from "../../assets/logo.png";
import Justice from "../../assets/justice.png";
import checkBox from "../../assets/checkbox.png";
import eyelash from "../../assets/eye-slash.png";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // validate form
        if(password.length <= 6){
            alert('Password must be greater than 6 characters');
        }
        // console.log(email, password);
        
        // Redirect to dashboard
        navigate("/");
    }

    return (
        <div className="sign-in">
            <img src={Justice} alt="justice" />
            <div className="register">
                <div className="container">
                    <div className="logo">
                        <img className="logo-img" src={Logo} alt="logo" />
                    </div>
                    <div className="header">
                        <h1>Login as Registrar</h1>
                        <h6>Login to start managing filing process</h6>
                    </div>
                    <form onSubmit={handleSubmit}>
                            <label>
                                <span className="email">Email</span>
                                <input 
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={ email }
                                    placeholder='Email'
                                    required
                                />
                            </label>
                            <label>
                                <span className="password">Password</span>
                                <input 
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={ password }
                                    placeholder='Password'
                                    required
                                />
                                <img className="vector" src={eyelash} alt="vector" />
                            </label>
                        <div className="row">
                            <span className="remember">
                                <img src={checkBox} alt="check-box" />
                                Remember me
                            </span>
                            <span className="forgot">forgot password?</span>
                        </div>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;