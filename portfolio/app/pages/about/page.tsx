'use client';

import React, { useState } from 'react';
import Menu from "@/app/components/menu";
import Bottom from "@/app/components/bottom";
import localFont from "next/font/local";
import { PageProps, getStaticProps, Skill } from "@/app/pages/about/webskills";
import Background from "@/app/components/Background";

// Import your font locally
const SanFranciscoFont = localFont({
	src: "../../../public/SanFrancisco.woff",
});


const MeDiscussions: { question: string; answers: string[] }[] = [
	{
		question: 'Who are you ?',
		answers: [
			'I\'m Noah Steiniger :)',
			'A junior student at Epitech Strasbourg !'
		]
	},
	{
		question: 'What is your purpose as a young developer ?',
		answers: [
			'I absolutely love designing beautiful websites and code them to life.',
			'Finding interest in all the things that surrounds me in life, I adore learning new stuff !'
		]
	},
	{
		question: 'So what are these interests that you are talking about ?',
		answers: [
			'Well, first of all I am a huge fan of music, from R\'n\'B, to weird Jazz, to Shoegaze.',
			'But that\'s not all, I also read philosophy (hopefully without existential crisis), history, sophism, and psychiatry.'
		]
	}
];

enum MessType {
	Chat,
	Me,
}

// Message component to render discussions
const Message = ({ value }: { value: string | string[] }) => {
	const Bubble = ({ value, className }: { value: string, className: string }) => (
		<div className={`text-xl rounded-[20px] px-5 py-4 mb-1 w-auto h-full ${className} ${SanFranciscoFont.className}`}>
			{value}
		</div>
	);

	return (
		<div className={`flex flex-col mx-5`}>
			{typeof value === 'string' ? (
				<Bubble value={value} className="bg-zinc-900 self-start text-start" />
			) : (
				(value as string[]).map((v, i) => (
					<Bubble value={v} className="bg-blue-500 self-end text-end" key={i} />
				))
			)}
		</div>
	);
};

// Main Page component
const Page: React.FC<PageProps> = ({ skills }) => {
	const [right, setRight] = useState(false);

	return (
		<>
			<Background />
			<Menu discarded="about" />
			<div className="w-screen h-screen flex items-center gap-x-10 justify-center">
				<div className="w-1/2 h-4/5 flex items-center justify-end">
					<div className="aspect-square w-auto h-full flex items-center justify-center">
						<img src="/images/me.png" className="w-full h-full object-cover rounded-3xl" alt="me" />
					</div>
				</div>

				<div className="w-1/2 h-4/5">
					<div className="h-full w-2/3 flex flex-col">
						<div className="h-28 w-full text-4xl flex">
							<button className="w-full h-full text-end" onClick={() => setRight(false)}>Me</button>
							<div className="h-full w-[1px] bg-white/20 mx-20"></div>
							<button className="w-full h-full text-start" onClick={() => setRight(true)}>Skills</button>
						</div>

						<div className="h-full w-full flex py-10 flex-col justify-start rounded-xl border-white overflow-y-auto scrollbar-thumb-gray-800/50 scrollbar-track-transparent custom-scrollbar border-opacity-20 bg-black/70">
							{right && skills ? (
								<div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-4">
									{skills.map((skill, i) => (
										<div className="flex items-center justify-center" key={i}>
											<img src={skill.src} alt={`Skill ${i}`} className="w-1/2 h-1/2 object-contain" />
										</div>
									))}
								</div>
							) : (
								MeDiscussions.map((discussion, i) => (
									<React.Fragment key={i}>
										<div className="ml-5 flex mt-5 items-start justify-start">
											<div
												className="w-[40px] h-[40px] bg-white/20 rounded-full flex-shrink-0"
												style={{
													backgroundImage: `url('/images/chat.png')`,
													backgroundSize: "contain",
													backgroundPosition: "center",
													backgroundRepeat: "no-repeat",
												}}
											></div>
											<Message value={discussion.question} />
										</div>
										<div className="mr-5 mb-5 flex items-start justify-end">
											<Message value={discussion.answers} />
											<div
												className="w-[40px] h-[40px] bg-white/20 rounded-full flex-shrink-0"
												style={{
													backgroundImage: `url('/images/me.png')`,
													backgroundSize: "contain",
													backgroundPosition: "center",
													backgroundRepeat: "no-repeat",
												}}
											></div>
										</div>
									</React.Fragment>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
