import NavItems from './NavItems';
import styled from 'styled-components';

const Header = ({logo}) => (
    <header>
        <nav>
            <img src={logo} />
            <ul>
                { NavItems.map((item, i) => <li key={i}>{item}</li>) }
            </ul>
        </nav>
    </header>
);

export default Header;