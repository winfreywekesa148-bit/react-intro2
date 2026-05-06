import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login data;", {email, password});
        };
        return (
            
        <form className="form-card" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="container">
                <label>Email</label>
                <input 
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Enter email"
                />
             </div>
            <div className="container">
                <label>Password</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                />
           </div>
              <button type="submit">Login</button>
        </form>
);
};
    
    
export default LoginForm;