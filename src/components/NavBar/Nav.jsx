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
        <nav className='px-4'>
            <div className='md:hidden ' onClick={() => setIcon(!icon)}>
                {
                    icon === true ? <FaRegWindowClose className='text-4xl ml-3 mt-5' /> : <RiMenu2Line className='text-4xl ml-3 mt-5' />
                }
            </div>
            <div>
                <ul className={` md:mt-5 roboto-medium md:flex duration-1000  text-center md:static mr-3 px-6 shadow-lg md:shadow-none rounded-xl bg-white absolute 
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