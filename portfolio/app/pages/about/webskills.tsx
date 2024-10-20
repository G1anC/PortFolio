'use server';
import path from 'path';
import fs from 'fs';
import {GetStaticProps} from "next";

export type Skill = {
	src: string;
};

export interface PageProps {
	skills: Skill[];
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const iconsDir = path.join(process.cwd(), '../../../public/images/icons');
	const files = fs.readdirSync(iconsDir);
	const skills = files.map((file) => ({
		src: `/images/icons/${file}`,
	}));

	return {
		props: {
			skills,
		},
	};
};