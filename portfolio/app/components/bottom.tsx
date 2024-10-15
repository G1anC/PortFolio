import React from "react";


const Home = ({title}: {title: string}) => {
	return (
		<div className="w-full h-24 absolute bottom-0 flex items-center justify-center">
			{title !== "Portfolio" &&
				<div className={"w-full h-[1px] bg-white/20 mx-10"} />
			}
			<p className="text-white w-96 h-96 flex items-center justify-center text-5xl">{title}</p>
			{title !== "Portfolio" &&
				<div className={"w-full h-[1px] bg-white/20 mx-10"} />
			}
		</div>
	)
}

export default Home;