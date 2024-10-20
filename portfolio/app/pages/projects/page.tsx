'use client';

import React, {useEffect, useState, useRef} from "react";
import Menu from "../../components/menu";
import Bottom from "@/app/components/bottom";
import localFont from "next/font/local";
import { gsap } from "gsap";
import Wolfram from "@/app/pages/projects/wolfram/wolfram"
import Area from "@/app/pages/projects/area/area"
import Shell from "@/app/pages/projects/42sh/42sh"
import Glados from "@/app/pages/projects/glados/glados"
import Rpg from "@/app/pages/projects/rpg/rpg"
import Designs from "@/app/pages/projects/designs/designs";
import Zappy from "@/app/pages/projects/zappy/zappy";
import Raytracer from "@/app/pages/projects/raytracer/raytracer";
import ScrollTrigger from  "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SelarisFont = localFont({
	src: "../../../public/Selaris.woff",
});

const ProjectTitle: React.FC<{ selectedProject: string, titleRef: React.RefObject<HTMLDivElement>, filterRef: React.RefObject<HTMLDivElement> }> = ({ selectedProject, titleRef, filterRef }) => {
	return (
		<div ref={titleRef} className={`w-full h-full absolute text-[250px] top-0 flex items-center justify-center opacity-0 z-10 antialiased ${SelarisFont.className}`}>
			<button className={"absolute z-40 w-full flex items-center justify-center"}>
				{selectedProject}
			</button>
		</div>
	);
};

const ProjectBackground: React.FC<{ selectedProject: string, bgRef: React.RefObject<HTMLDivElement> }> = ({selectedProject, bgRef}) => {
	return (
		<div ref={bgRef} className={"w-screen h-screen static"} style={{
			backgroundImage: `url(/images/projects/${selectedProject}.png)`,
			backgroundSize: "cover",
		}} />
    );
}

export {ProjectBackground, ProjectTitle}

export default function	Projects() {
	const bgRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const filterRef = useRef<HTMLDivElement>(null);
	const projects: React.ReactNode[] = [
	    <Shell titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	    <Raytracer titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	    <Wolfram titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	    <Area titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	    <Glados titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	    <Designs titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	    <Zappy titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />,
	    <Rpg titleRef={titleRef} filterRef={filterRef} bgRef={bgRef} />
	];
	const [selectedProject, setSelectedProject] = useState<React.ReactNode>(projects[0]);
	const [i, setI] = useState(0);

	useEffect(() => {
		if (!bgRef.current || !titleRef.current || !filterRef.current)
			return
		gsap.to(bgRef.current, {duration: 0.3, opacity: 1, ease: "power2.out"});
		gsap.to(titleRef.current, {duration: 1, opacity: 1, y: 20});
		gsap.to(filterRef.current,  {duration: 0.3, opacity: 1, backdropFilter: "blur(100px)", ease: "power2.out"});

		ScrollTrigger.getAll().forEach(trigger => trigger.kill());

		gsap.to(bgRef.current, {
			opacity: 0,
			scrollTrigger: {
				trigger: bgRef.current,
				start: "top top",
				end: "bottom top",
				scrub: 1,
				pin: true,
			}
		});
		gsap.to(filterRef.current, {
			opacity: 0,
			scrollTrigger: {
				trigger: filterRef.current,
				start: "top top",
				end: "bottom top",
				scrub: 1,
				pin: true,
			}
		});
	}, [selectedProject]);

	if (bgRef === undefined || titleRef === undefined || filterRef === undefined)
		return;
	return (
		<div className={"w-screen overflow-x-hidden relative h-full"}>
			<Menu discarded={"projects"}/>
			<div className={"w-full h-full"}>
				<div className={"absolute top-0 w-screen h-screen"}>
					<div className={"absolute z-30 left-0 w-20 h-full flex justify-center items-center"}>
						<img alt={"minus"} src={"/images/arrow.svg"} id={"left"} className={"w-10 text-white rotate-[180deg]"}
							 onClick={() => {
								 gsap.to(filterRef.current, {
									 duration: 0.05,
									 opacity: 1,
									 ease: "power2.out",
									 backdropFilter: "blur(100px)"
								 })
								 gsap.to(titleRef.current, {
									 x: 100,
									 duration: 0.2,
									 opacity: 0,
									 ease: "power1.in",
									 onComplete: () => {
										 let val = (i - 1 + projects.length) % projects.length
										 setI(val)
										 setSelectedProject(projects[val]);
										 console.log(val);
									 }
								 });
							 }
							 }/>
					</div>
					<div className={"absolute z-30 right-0 w-20 h-full flex justify-center items-center"}>
						<img alt={"plus"} src={"/images/arrow.svg"} id="right" className={"w-10 text-white"}
							 onClick={() => {
								 gsap.to(filterRef.current, {
									 duration: 0.05,
									 opacity: 1,
									 ease: "power2.out",
									 backdropFilter: "blur(100px)"
								 })
								 gsap.to(titleRef.current, {
									 x: -100,
									 duration: 0.2,
									 opacity: 0,
									 ease: "power1.in",
									 onComplete: () => {
										 let val = (i + 1 + projects.length) % projects.length
										 setI(val)
										 setSelectedProject(projects[val]);
										 console.log(val)
									 }
								 });
							 }
							 }/>
					</div>
				</div>
				<div className={"w-screen m-0 p-0 h-full flex flex-col items-center justify-center"}>{selectedProject}</div>

			</div>
		</div>
	)
}