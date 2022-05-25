import styles from "./Navbar.module.css";

const Navbar = () => {
    const navLinks = [
        {
            link: "/",
            text: "Home",
        },
        {
            link: "/contact",
            text: "Contact",
        },
        {
            link: "/play",
            text: "Play",
        },
        {
            link: "/discord",
            text: "Discord",
        },
    ];
    return (
        <nav className={styles.navRoot}>
            <div className={styles.navTitle}>
                <h1>VanillaCraft</h1>
            </div>
            <ul className={styles.navLinks}>
                {navLinks.map((link, index) => (
                    <li key={index} className={styles.navLink}>
                        <a href={link.link}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
