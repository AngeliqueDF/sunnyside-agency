import companyLogo from "./../../public/images/logo.svg";
import styles from "./../../styles/Header.module.css";

import ContactCallToAction from "../ContactCallToAction/ContactCallToAction";

export default function Header() {
	const navLinks = [
		{
			url: "#",
			text: "About",
		},
		{
			url: "#",
			text: "Services",
		},
		{
			url: "#",
			text: "Projects",
		},
	];
	return (
		<header className={styles.container}>
			<h1>
				<a href="#">
					<img src={companyLogo.src} alt="Sunnyside" />
				</a>
			</h1>

			<nav className={styles.navigation}>
				{navLinks.map((link, index) => (
					<a key={link + index} href={link.url}>
						{link.text}
					</a>
				))}

				<ContactCallToAction />
			</nav>
		</header>
	);
}
