import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from 'react';
import "../sass/styles.css"

const Navbar = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <a href="/"><img src="../img/logo.png" className='logoNav' alt="" /></a>
			<nav ref={navRef}>
				<a href="/#">Nosotros</a>
				<a href="/#">Tratamientos</a>
				<a href="/#">Dentistas</a>
				<a href="/#">Contáctanos</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;