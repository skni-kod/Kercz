import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export default AuthContext;



export const AuthProvider = ({children}) => {
    const checkAuthTokens = () => {
        let token = localStorage.getItem('authTokens');
        return token ? JSON.parse(token) : null;
    };

    const checkUser = () => {
        let token = localStorage.getItem('authTokens');
        return token ? jwt_decode(token) : null;
    };


    let [authTokens, setAuthTokens] = useState(() => checkAuthTokens());
    let [user, setUser] = useState(() => checkUser());
    let [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    let loginUser = async (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;

        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email': email, 'password': password})
        });

        let data = await response.json();
        console.log(data);

        if(response.status !== 200){
            console.log('Something went wrong!');
            return;
        }

        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem('authTokens', JSON.stringify(data));

        navigate('/');
    };

    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/');
    };

    let updateToken = async () => {
        let response = fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'refresh': authTokens?.refresh})
        });

        let data = (await response).json();
        if((await response).status !== 200){
            logoutUser();
            return;
        }

        setAuthTokens((await data));
        setUser(jwt_decode((await data).access));
        localStorage.setItem('authTokens', JSON.stringify((await data)));

        if(loading) {
            setLoading(false);
        }
    };



    useEffect(() => {
        if(loading) {
            updateToken()
        }

        let fourteenMinutes = 1000 * 60 * 14;

        let interval = setInterval(() => {
            if(authTokens) {
                updateToken();
            }
        }, fourteenMinutes);

        return () => clearInterval(interval);
    

    }, [authTokens, loading]);

    let contextData = {
        client: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
    };


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}