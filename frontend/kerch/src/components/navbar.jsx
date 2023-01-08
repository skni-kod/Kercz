import '../assets/css/components/navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {

    const links = [
        {
            name: 'Damskie',
            to: 'women',
        },
        {
            name: 'Męskie',
            to: 'men',
        },
        {
            name: 'Dziecięce',
            to: 'child',
            child: [{
                name: 'Sandały',
                to: '/sandals',
            },
            {
                name: 'Zimowe',
                to: '/winter',
            }
            ]
        },
        {
            name: 'Marki',
            to: 'brands',
        },
        {
            name: 'Bestseller',
            to: 'bestseller',
        },
        {
            name: 'Regulamin',
            to: 'statute',
        },
        {
            name: 'Kontakt',
            to: 'contact',
        }
    ];

    return (
        <nav>
            <ul className='top-nav'>
                <li>
                    <Link to="/login" className='link'>Logowanie</Link>
                </li>
                <li className='divider'>
                </li>
                <li>
                    <Link to="/register" className='link'>Rejestracja</Link>
                </li>
            </ul>
            <div className='middle-nav'>
                <div className='search-group'>
                    <input type="search" placeholder='Szukaj...' />
                    <button>
                        <span className='icon--search'></span>
                    </button>
                </div>
                <ul>
                    <li>
                        <Link to="/favourites">
                            <span className='icon--hearth'></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shopping-cart">
                            <span className='icon--cart'></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className='bottom-nav'>
                {links.map(link =>
                    <li key={link.name}>
                        <Link to={link.to} className="link">
                            {
                                link.name
                            }
                        </Link>
                        {
                            link.child ?
                                <ul className='dropdown'>
                                    {link.child.map(child => <li key={child.name}><Link to={child.to} className="link">{child.name}</Link></li>)}
                                </ul>
                                : ''
                        }
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;