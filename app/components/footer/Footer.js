const Footer = ({links}) => (
    <footer>
        <ul>
            { links.map((link, i) => <li key={i}><a href={link.url}>{link.title}</a></li>) }
        </ul>
    </footer>
);

export default Footer;