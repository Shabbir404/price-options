import '../../color.css'
import Link from '../link/Link';
import { RiMenu2Line } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from 'react';
const Nav = () => {
    const [icon, setIcon] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/blog', name: 'Blog', id: 5 }
    ];

    return (
        <nav className='px-4 '>
            <div className='md:hidden ' onClick={() => setIcon(!icon)}>
                {
                    icon === true ? <FaRegWindowClose className='text-2xl ml-3' /> : <RiMenu2Line className='text-2xl ml-3' />
                }
            </div>
            <div>
                <ul className={`roboto-medium md:flex duration-1000 mr-3 px-6 shadow-lg rounded-xl bg-white absolute 
                    ${icon ? '' : 'hidden'}`}>

                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;