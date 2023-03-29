import '../assets/css/components/register.css';

const Register = () => {
    return(
        <>
        <div className="main-window">

            <div className="register-window">
                <div className="logo">
                    LOGO(tu wstawic logo)
                </div>
                <label className="register-text">
                    Rejestracja
                </label>
                <form action="">
                    <div className="container" >
                       <span className='icon--user'></span>
                        <div className="separator"></div>
                        <input name='login' id='login' type="text" placeholder='login' autoComplete='off' required />
                    </div>
            
                    <div className="container" >
                       <span className='icon--mail'></span>
                        <div className="separator"></div>
                        <input name='email' id='email' type="text" placeholder='email' autoComplete='off' required />
                    </div>

                    <div className="container" >
                       <span className='icon--lock'></span>
                        <div className="separator"></div>
                        <input name='password' id='password' type="password" placeholder='hasło' autoComplete='off' required />
                    </div>

                    <div className="container" >
                       <span className='icon--lock'></span>
                        <div className="separator"></div>
                        <input name='password' id='password' type="password" placeholder='powtórz hasło' autoComplete='off' required />
                    </div>

                    <button type='submit' value="Zarejestruj" className='myButton'>Zarejestruj</button>
                    
                </form>
            </div>
            <div className="redirect">
                <label id="redirect_label" htmlFor="">Masz już konto?</label>
                <button>zaloguj się</button>
            </div>
        </div>
        </>
    )
}
export default Register