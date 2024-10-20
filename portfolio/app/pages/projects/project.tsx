import {ProjectBackground, ProjectTitle} from "@/app/pages/projects/page";
import React, {ReactNode} from "react";

export default function Project( {children, titleRef, filterRef, bgRef, name }: {
	children: React.ReactNode,
	titleRef: React.RefObject<HTMLDivElement>,
	filterRef: React.RefObject<HTMLDivElement>,
	bgRef: React.RefObject<HTMLDivElement>,
	name: string
}): ReactNode {
	return (
		<>
			<div className={"w-screen h-screen z-[-1] sticky"}>
				<ProjectTitle titleRef={titleRef} filterRef={filterRef} selectedProject={name}/>
				<ProjectBackground bgRef={bgRef} selectedProject={name}/>
				<div ref={filterRef} className={"w-screen h-screen bg-black/50 backdrop-blur-xl top-0 absolute"}/>
			</div>
			<div className={"w-full h-full"}>{children}</div>

		</>

	)
}