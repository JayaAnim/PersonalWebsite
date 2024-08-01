'use client'
import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';
import Image from 'next/image';

type ProjectData = {
    title: string;
    description: string;
    youtubeLink: string | null;
    githubLink: string | null;
    imageHref: string;
    skills: string;
}

type ProjectRowProps = {
    toggle: boolean;
    defaultShowLeft: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    projectLeft: ProjectData;
    projectRight: ProjectData;
}

const ProjectSection: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const projectLeft: ProjectData = {
        title: "Medusa Project",
        description: "Interactive and realtime Medical application (mobile and web) to increase situational awareness in hospitals. Utilizes NodeJS based REST API, React Web Application, and Kotlin mobile application. Web application is used for instructors to plan/create interactive lessons and mobile is used for nurses to complete lessons. Integrates with S3 bucket and deploys with automated CI/CD, utilizing github actions, Dockerhub, and bash scripts",
        youtubeLink: null,
        githubLink: null,
        imageHref: "/medusa_project_image.png",
        skills: "aws, nodejs, javascript, s3, kotlin, docker, dockerhub, ec2, bash"
    };

    const projectRight: ProjectData = {
        title: "Travel Planner (with map)",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        youtubeLink: null,
        githubLink: null,
        imageHref: "/travel_planner_image.png",
        skills: "aws, nodejs, javascript, s3, docker, dockerhub, ec2"
    };

    return (
        <section id="projects" className="relative z-10 min-h-screen w-screen bg-dark-black py-8 overflow-hidden">
            <h2 className="text-4xl font-bold text-center text-electric-blue">Projects</h2>
            <ProjectRow defaultShowLeft={true} toggle={toggle} setToggle={setToggle} projectLeft={projectLeft} projectRight={projectRight} />
            <ProjectRow defaultShowLeft={false} toggle={toggle} setToggle={setToggle} projectLeft={projectLeft} projectRight={projectRight} />
            <ProjectRow defaultShowLeft={true} toggle={toggle} setToggle={setToggle} projectLeft={projectLeft} projectRight={projectRight} />
        </section>
    );
};

const ProjectRow: React.FC<ProjectRowProps> = ({ defaultShowLeft, toggle, setToggle, projectLeft, projectRight }) => {

    const getShowLeft = () => {
        
        if (defaultShowLeft && !toggle) {
            return true;
        }
        else if (defaultShowLeft && toggle) {
            return false;
        }
        else if (!defaultShowLeft && !toggle) {
            return false;
        }
        else if (!defaultShowLeft && toggle) {
            return true;
        }
    }

    return (
        <div className="relative w-full mt-28 h-[500px]">
            <div className={`absolute top-0 left-0 h-[500px] w-5/6 md:w-4/5 lg:w-2/3 xl:w-1/2 border-t border-b border-r border-solid border-white rounded-r-md transition-transform ease-in-out duration-[750ms] overflow-hidden ${getShowLeft() ? '' : '-translate-x-full'}`}>
                <div className="relative flex flex-col h-full w-full">
                    <a href={projectLeft.githubLink || '#'} target="_blank" rel="noopener noreferrer" className="cursor-pointer z-30">
                        <Image src={"/github.svg"} alt={"GitHub icon link"} height={"30"} width={"30"} className={"absolute top-0 right-0 m-2 cursor-pointer"} />
                    </a>
                    <a href={projectLeft.youtubeLink || '#'} target="_blank" rel="noopener noreferrer" className="cursor-pointer z-30">
                        <Image src={"/youtube.svg"} alt={"YouTube icon link"} height={"30"} width={"30"} className={"absolute top-0 left-0 md:left-auto md:right-12 m-2 cursor-pointer"} />
                    </a>
                    <h2 className="text-2xl font-mono text-center text-neon-green mt-6 z-40">{projectLeft.title}</h2>
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row flex-grow justify-center items-center mt-6">
                            <Image
                                src={projectLeft.imageHref}
                                width={250}
                                height={150}
                                alt={projectLeft.title}
                                className={"shadow-md shadow-neon-green object-center rounded-lg w-2/3 md:w-1/2 max-h-[150px]"}
                            />
                        </div>
                        <div className="flex flex-row flex-grow justify-center mt-6 overflow-scroll">
                            <p className="text-center px-6 md:px-9 text-sm md:text-base">
                                {projectLeft.description}
                            </p>
                        </div>
                        <div className="h-10 text-center p-2 overflow-clip">
                            <p className="text-gray-300 italic text-xs">{projectLeft.skills}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowLeftIcon height={50} width={50} onClick={() => setToggle(v => !v)} className={`hover:stroke-neon-green cursor-pointer absolute right-2 md:right-5 top-1/2 -translate-y-1/2 transition-opacity ${getShowLeft() ? 'delay-[750ms] opacity-1' : 'delay-0 opacity-0'}`} />

            <div className={`absolute top-0 right-0 h-[500px] w-5/6 md:w-4/5 lg:w-2/3 xl:w-1/2 border-t border-b border-l border-solid border-white rounded-l-md transition-transform ease-in-out duration-[750ms] overflow-hidden ${getShowLeft() ? 'translate-x-full' : ''}`}>
                <div className="flex flex-col h-full w-full">
                    <a href={projectRight.githubLink || '#'} target="_blank" rel="noopener noreferrer" className="cursor-pointer z-30">
                        <Image src={"/github.svg"} alt={"GitHub icon link"} height={"30"} width={"30"} className={"absolute top-0 left-0 m-2 cursor-pointer"} />
                    </a>
                    <a href={projectRight.youtubeLink || '#'} target="_blank" rel="noopener noreferrer" className="cursor-pointer z-30">
                        <Image src={"/youtube.svg"} alt={"YouTube icon link"} height={"30"} width={"30"} className={"absolute top-0 right-0 md:right-auto md:left-12 m-2 cursor-pointer"} />
                    </a>
                    <h2 className="text-2xl font-mono text-center text-electric-blue mt-6 z-40">{projectRight.title}</h2>
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-row flex-grow justify-center items-center mt-6">
                            <Image
                                src={projectRight.imageHref}
                                width={250}
                                height={150}
                                alt={projectRight.title}
                                className={"shadow-md shadow-electric-blue object-center rounded-lg w-2/3 md:w-1/2 max-h-[150px]"}
                            />
                        </div>
                        <div className="flex flex-row flex-grow justify-center mt-6 overflow-scroll">
                            <p className="text-center px-6 md:px-9 text-sm md:text-base">
                                {projectRight.description}
                            </p>
                        </div>
                        <div className="h-10 text-center p-2 overflow-clip">
                            <p className="text-gray-300 italic text-xs">{projectRight.skills}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowRightIcon height={50} width={50} onClick={() => setToggle(v => !v)} className={`hover:stroke-electric-blue cursor-pointer absolute left-2 md:right-5 top-1/2 -translate-y-1/2 transition-opacity ${getShowLeft() ? 'delay-0 opacity-0' : 'delay-[750ms] opacity-1'}`} />
        </div>
    );
}

export default ProjectSection;
