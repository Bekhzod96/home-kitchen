import React, { useState } from 'react';
import {
	Container,
	Collapse,
	NavbarToggler,
	Navbar,
	Button,
	Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Logo = (
	<svg
		className="logo"
		version="1.0"
		xmlns="http://www.w3.org/2000/svg"
		width="171.000000pt"
		height="171.000000pt"
		viewBox="0 0 171.000000 171.000000"
		preserveAspectRatio="xMidYMid meet"
	>
		<g
			transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)"
			fill="#fff"
			stroke="none"
		>
			<path
				d="M1357 1183 c-13 -12 -7 -23 12 -23 10 0 29 -8 42 -19 22 -18 23 -19
6 -62 -9 -24 -55 -90 -102 -147 l-84 -103 76 -107 c133 -186 141 -192 288
-192 78 0 95 3 95 15 0 10 -10 15 -33 15 -18 0 -43 7 -55 16 -13 9 -77 87
-142 174 l-120 159 49 58 c102 123 192 193 246 193 16 0 25 6 25 15 0 13 -23
15 -148 15 -82 0 -152 -3 -155 -7z"
			/>
			<path
				d="M50 1170 c0 -5 8 -10 19 -10 41 0 75 -45 149 -200 41 -85 105 -220
143 -299 59 -123 71 -143 83 -130 11 12 146 337 146 353 0 21 -20 -2 -43 -50
-45 -91 -55 -83 -164 146 l-92 195 -121 3 c-77 2 -120 -1 -120 -8z"
			/>
			<path
				d="M630 1172 c0 -4 9 -13 20 -20 19 -12 20 -23 20 -297 0 -274 -1 -285
-20 -295 -41 -22 -19 -30 80 -30 80 0 100 3 100 14 0 8 -4 18 -10 21 -6 4 -10
60 -10 136 l0 129 105 0 105 0 0 -135 c0 -83 -4 -135 -10 -135 -5 0 -10 -7
-10 -15 0 -12 18 -15 100 -15 78 0 100 3 100 14 0 7 -9 16 -20 19 -19 5 -20
14 -20 286 0 268 1 282 20 301 11 11 20 22 20 25 0 3 -45 5 -100 5 -91 0 -118
-8 -90 -25 6 -4 10 -65 10 -151 l0 -144 -105 0 -105 0 0 144 c0 86 4 147 10
151 28 17 1 25 -90 25 -55 0 -100 -3 -100 -8z"
			/>
			<path
				d="M158 834 c-5 -4 -8 -32 -8 -63 0 -107 -42 -193 -100 -208 -68 -18
-31 -28 108 -31 113 -2 143 0 140 10 -3 7 -13 15 -24 16 -50 10 -93 91 -95
181 -2 59 -12 105 -21 95z"
			/>
		</g>
	</svg>
);

const Header = () => {
	return (
		<div className="header">
			<div className="container1 text-center p-0 m-auto ">
				<Navbar
					light
					expand="xl"
					className="p-0 text-white justify-content-center "
				>
					<Col
						lg="2"
						md="2"
						className="hide-sm row justify-content-start align-items-center"
					>
						<FontAwesomeIcon className="mx-1" icon={['fab', 'facebook-f']} />
						<FontAwesomeIcon className="mx-2" icon={['fab', 'twitter']} />
						<FontAwesomeIcon className="mx-1" icon={['fab', 'instagram']} />
					</Col>
					<Col lg="8" md="8" sm="6" className=" row m-auto ">
						<Col
							lg="4"
							md="4"
							className="row align-items-center hide-md  flex-nowrap"
						>
							<p>Shop</p>
							<p>Plan my kitchen</p>
						</Col>
						<Col lg="4" md="4" sm="6" xs="12" className="order-sm-0">
							{Logo}
						</Col>
						<Col
							lg="4"
							md="4"
							className="row align-items-center hide-md  flex-nowrap"
						>
							<p>About Us</p>
							<p>Gallery</p>
						</Col>
					</Col>
					<Col lg="2" md="2" sm="6" xs="6" className=" hide-xsm">
						<Button outline>
							My Order <FontAwesomeIcon icon={faShoppingCart} />
						</Button>
					</Col>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
