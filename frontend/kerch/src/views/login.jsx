import { useContext } from "react";
import AuthContext from "../context/authContext";

const Login = () => {
    let {loginUser} = useContext(AuthContext);
    return (
        <div>
            <form onSubmit={loginUser}>
                <br/>
                <input type="email" name="email" placeholder="Podaj email" />
                <br/><br/>
                <input type="password" name="password" placeholder="Podaj hasło" />
                <br/><br/>
                <input type="submit" value="Zaloguj się" />
            </form>
        </div>
    );
}

export default Login;