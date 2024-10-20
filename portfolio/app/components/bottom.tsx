import React from "react";
import { gsap } from "gsap";


const Bottom = ({title}: {title: string }) => {
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const el = ref.current;
		gsap.to(el, {
			opacity: 1,
			duration: 0.5,
			ease: "power2.inOut",
			delay: 1.5,
		});
	}, []);
	return (
		<div ref={ref} className="opacity-0 w-full h-20 absolute bottom-0 flex items-center justify-center">
			{title !== "Portfolio" &&
				<div className={"w-full h-[1px] bg-white/10 mx-10"} />
			}
			<p className="text-white w-96 h-96 flex items-center justify-center text-3xl">{title}</p>
			{title !== "Portfolio" &&
				<div className={"w-full h-[1px] bg-white/10 mx-10"} />
			}
		</div>
	)
}

export default Bottom;