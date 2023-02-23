import '../assets/css/components/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {

    const footerLinks = [
        {
            name: 'kontakt',
            to: 'contact',
        },
        {
            name: 'pomoc',
            to: 'help', //Might be another destination
        },
        {
            name: 'twoje konto',
            to: 'account', //Might be another destination
        },
    ];

    function currentYear() {
        const dateNow = new Date();
        return dateNow.getFullYear();
    }

    return (
            <footer>
                <ul className='footer-list'>
                    {footerLinks.map(footerLinks =>
                    <li key={footerLinks.name}>
                        <Link to={footerLinks.to} className="footer-link">
                            {
                                footerLinks.name
                            }
                        </Link>
                    </li>
                    )}
                </ul>

                <p className='copyright'>
                    &copy; 2021 - {currentYear()} Kercz Poland. All right reserved.
                </p>
            </footer>
    );
}

export default Footer;