import React from 'react';

const Menu = ({discarded}: {discarded: string}) => {
	const links = ['home', 'about', 'projects', 'contact', 'CV/Education'];
	return (
		<div className={"w-full h-24 z-2 flex absolute items-center justify-center"}>
			{links.map((link, index) => {
				if (link === discarded) return null;

				return (
					<React.Fragment key={link}>
						<a href={`../pages/${link}/`}>{link}</a>
						{index < links.length - 1 && <div className="m-32 h-[1px] w-60 bg-white/10"></div>}
					</React.Fragment>
				);
			})}
		</div>
	)
}

export default Menu;