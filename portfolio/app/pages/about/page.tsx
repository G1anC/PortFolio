import Menu from "@/app/components/menu"
import Bottom from "@/app/components/bottom";
import localFont from "next/font/local";
import "./scrollbar.css";

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
			'Well, first of all I am a huge fan of music, from R\'n\'B, to weird Jazz, to Shoegaze. I all always have my earplugs on when alone, listening to all sorts of songs everyday to find raw gold !',
			'But that\'s not all, I also read philosophy',
			' (hopefully without existensial crisis)',
			'history, sophism and psychiatry to understand myself and others better.',
			'(Jung and Camus are my favorites :3)'
		]
	}
];

const SkillsDiscussions: { question: string; answers: string[] }[] = [
	{
		question: 'What are your skills ?',
		answers: [
			'I am a fullstack developer, with a strong preference for the frontend.',
			'I am proficient in React, Next.js, TailwindCSS, and I have a good understanding of Node.js and Express.js.',
			'I am also familiar with databases, such as MongoDB and MySQL.',
			'I have a good understanding of the basics of cybersecurity and I am currently learning more about it.'
		]
	},
	{
		question: 'What are your plans for the future ?',
		answers: [
			'I am currently learning TypeScript and I plan to learn more about it, as well as GraphQL and Docker.',
			'I also plan to learn more about cybersecurity and cryptography, as well as machine learning and AI.',
			'I am also learning more about design and UX/UI, as well as learning more about the basics of marketing.'
		]
	}
];

enum MessType {
	Chat,
	Me,
}

const Message = ({value}: {value: string | string[]}) => {
	let rdm = Math.random();
	const Bubble = ({ value, className }: { value: string, className: string }) => (
		<div className={`text-xl rounded-[20px] px-5 py-4 mb-1 w-auto h-full ${className} ${SanFranciscoFont.className}`}>
			{value}
		</div>
	);

	return (
		<div className={`flex flex-col mx-5 ${rdm % 2 === 0 ? "w-3/5" : "w-1/2"} ${typeof value === "string" ? "justify-start" : "justify-end"} `}>
			{typeof value === "string" ?
				<Bubble value={value} className={`bg-zinc-900 self-start text-start`} />
			: (
				(value as string[]).map((v, i) => {
					rdm = Math.random();
					return (
						<Bubble value={v} className={`bg-blue-500 self-end text-end`} key={i}/>
					)
				})
			)}
		</div>
	);
}

export default function Page() {
	const random = Math.random();
	return (
		<>
			<Menu discarded="about"/>
			<div className="w-screen h-screen flex items-center gap-x-10 justify-center">

				<div className={"w-1/2 h-4/5 flex items-center justify-end"}>
					<div className={"aspect-square w-auto h-full flex items-center justify-center "}>
						<img src={"/images/me.png"} className={"w-full h-full object-cover rounded-3xl"} alt={"me"}
						/>
					</div>
				</div>

				<div className={"w-1/2 h-4/5"}>
					<div className={"h-full w-2/3 flex flex-col"}>
						<div className={"h-28 w-full text-4xl flex"}>
							<button className={"w-full h-full text-end"}>Me</button>
							<div className={"h-full w-[1px] bg-white/20 mx-20"}></div>
							<button className={"w-full h-full text-start"}>Skills</button>
						</div>
						<div className={"h-full w-full flex py-10 flex-col justify-start rounded-xl border-t border-b border-white overflow-y-auto scrollbar-thumb-gray-800/50 scrollbar-track-transparent custom-scrollbar border-opacity-20 bg-black/70"}>
							{MeDiscussions.map((discussion, i) => {
								return (
								<>
									<div className={"ml-5 flex mt-5 items-start justify-start"}>
										<div className={"w-[40px] h-[40px] bg-white/20 rounded-full flex-shrink-0"} style={{
											backgroundImage: `url('/images/chat.png')`,
											backgroundSize: "contain",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
										}}></div>
										<Message value={discussion.question} />
									</div>
									<div className={"mr-5 mb-5 flex items-start justify-end"}>
										<Message value={discussion.answers}/>
										<div className={"w-[40px] h-[40px] bg-white/20 rounded-full flex-shrink-0"} style={{
											backgroundImage: `url('/images/me.png')`,
											backgroundSize: "contain",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
										}}></div>
									</div>
								</>
							)}
							)}
						</div>
					</div>
				</div>
			</div>
			<Bottom title={"About"}/>
		</>
	);
}