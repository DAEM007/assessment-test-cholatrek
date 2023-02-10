// All react imports
import { useState } from "react";
// All styles import
import "./SignIn.css";
// All assets import
import Justice from "../../assets/justice.png";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="sign-in">
            <img src={Justice} alt="justice" />
            <div className="register">
                <div className="container">
                    <div className="logo">
                        <img src="" alt="logo" />
                        <img src="" alt="logo-text" />
                    </div>
                    <div className="header">
                        <h1>Login as Registrar</h1>
                        <h6>Login to start managing filing process</h6>
                    </div>
                    <form>
                            <label>
                                <span>Email</span>
                                <input 
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={ email }
                                    placeholder='Email'
                                    required
                                />
                            </label>
                            <label>
                                <span>Password</span>
                                <input 
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={ password }
                                    placeholder='Password'
                                    required
                                />
                            </label>
                        <div className="row">
                            <span className="remember">Remember me</span>
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