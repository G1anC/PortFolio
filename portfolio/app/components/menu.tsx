'use client';

import React from 'react';
import { gsap } from 'gsap';

const Menu = ({discarded}: {discarded: string}) => {
	const links = ['home', 'about', 'projects', 'contact', 'CV/Education'];
	const [open, setOpen] = React.useState(false);
	const menuRef = React.useRef<HTMLDivElement>(null);

	if (discarded === 'home') {
		React.useEffect(() => {
			if (menuRef.current) {
				const items = menuRef.current.querySelectorAll('a, div');
				gsap.fromTo(items, {opacity: 0}, {opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.inOut"});
			}
		}, []);
		return (
			<div className="w-screen asbolute top-0 h-20 z-50 flex absolute items-center justify-center" ref={menuRef}>
				{links.map((link, index) => (
					link !== discarded && (
						<React.Fragment key={link}>
							<a href={link === 'home' ? '../' : `../pages/${link}/`}>{link}</a>
							{index < links.length - 1 && <div className="m-32 h-[1px] w-60 bg-white/10"></div>}
						</React.Fragment>
					)
				))}
			</div>
		);
	}
	React.useEffect(() => {
			if (menuRef.current)
				gsap.fromTo(menuRef.current.querySelectorAll('a, div'), {
					opacity: 0
				}, {
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: 0.5,
					ease: "power2.inOut"
				});
		}, [open]);
	return (
		<div className={"absolute top-0 w-full z-50 h-20 flex justify-center items-center"}>
			<div className="right-5 z-50 flex absolute items-center justify-end">
				<button onClick={() => setOpen(!open)} className="z-10 mr-5">
					<img src="/images/burger.png" alt="burger" className="w-10 h-10"/>
				</button>
			</div>
			{open && (<div className="w-[70%] z-50 flex absolute backdrop-blur-md items-center justify-center" ref={menuRef}>
					{links.map((link, index) => (
						link !== discarded && (
							<React.Fragment key={link}>
								<a href={link === 'home' ? '../' : `../pages/${link}/`}>{link}</a>
								{index < links.length - 1 && <div className="m-32 h-[1px] w-[8%] bg-white/10"></div>}
							</React.Fragment>
						)
					))}
				</div>
			)}
		</div>
	);
}

export default Menu;