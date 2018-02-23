import Link from 'next/link';

const NavItems = [
    <Link prefetch href='/'><a>Home</a></Link>,
    <Link prefetch href='/about'><a>About</a></Link>,
    <Link prefetch href='/contact'><a>Contact</a></Link>,
    <Link prefetch href='/brands'><a>Brands</a></Link>
];

export default NavItems;