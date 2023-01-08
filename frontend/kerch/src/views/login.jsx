import '../assets/css/components/login.css';

const Login = () => {
    return(
        <>
        <div className="main-window">
            <div className="redirect">
                <label id="redirect_label" htmlFor="">Nie masz konta?</label>
                <button>zarejestruj się</button>
            </div>
            <div className="login-window">
                <div className="logo">
                    LOGO(tu wstawic logo)
                </div>
                <label className="login-text">
                    Logowanie
                </label>
                <form action="">
                    <div className="container">
                        <span className='icon--hearth'></span>
                        <div className="separator"></div>
                        <input name='login' id='login' type="text" placeholder='login lub email' autoComplete='off' required />
                    </div>
                    <div className="container">
                        <span className='icon--hearth'></span>
                        <div className="separator"></div>
                        <input name='password' id='password' type="password" placeholder='hasło' required />
                    </div>
                    <button type='submit' value="Zaloguj" className='myButton'>Zaloguj</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login