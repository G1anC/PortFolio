import Image from "next/image";
import {Title, Subtitle} from "./components/titles";
import Menu from "./components/menu";
import Bottom from "@/app/components/bottom";
export default function Home() {
    return (
        <>
            <Menu discarded="home"/>
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <div
                    className={"w-[85%] z-[-1] pb-[85%] border mx-auto absolute top-[-85%] border-white opacity-10 rounded-full"}/>
                <div
                    className={"w-[85%] z-[-1] pb-[85%] border mx-auto absolute bottom-[-155%] border-white opacity-10 rounded-full"}/>
                <Title/>
                <Subtitle/>
            </div>

            <Bottom title={"Portfolio"}/>
        </>

    );
}
