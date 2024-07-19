'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MousePosition {
    x: number;
    y: number;
}

interface SkillProps {
    name: string;
    alt: string;
    logo: string;
    link: string;
}

const skills: SkillProps[] = [
    { name: "AWS", alt: "AWS Logo", logo: "/aws_logo.svg", link: "https://aws.amazon.com/" },
    { name: "SASS/CSS", alt: "CSS Logo", logo: "/css_logo.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", alt: "JavaScript Logo", logo: "/javascript_logo.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "MySQL", alt: "MySQL Logo", logo: "/mysql_logo.svg", link: "https://www.mysql.com/" },
    { name: "PostgreSQL", alt: "PostgreSQL Logo", logo: "/postgresql_logo.svg", link: "https://www.postgresql.org/" },
    { name: "Tailwind", alt: "Tailwind Logo", logo: "/tailwind_logo.svg", link: "https://tailwindcss.com/" },
    { name: "Azure", alt: "Azure Logo", logo: "/azure_logo.svg", link: "https://azure.microsoft.com/" },
    { name: "Django", alt: "Django Logo", logo: "/django_logo.svg", link: "https://www.djangoproject.com/" },
    { name: "Kubernetes", alt: "Kubernetes Logo", logo: "/kubernetes_logo.svg", link: "https://kubernetes.io/" },
    { name: "Next.js", alt: "Next.js Logo", logo: "/nextjs_logo.svg", link: "https://nextjs.org/" },
    { name: "Python", alt: "Python Logo", logo: "/python_logo.svg", link: "https://www.python.org/" },
    { name: "C/C++", alt: "C++ Logo", logo: "/cplusplus_logo.svg", link: "https://isocpp.org/" },
    { name: "Docker", alt: "Docker Logo", logo: "/docker_logo.svg", link: "https://www.docker.com/" },
    { name: "Java", alt: "Java Logo", logo: "/java_logo.svg", link: "https://www.java.com/" },
    { name: "Node.js/Express.js", alt: "Node.js Logo", logo: "/nodejs_logo.svg", link: "https://nodejs.org/" },
    { name: "React", alt: "React Logo", logo: "/react_logo.svg", link: "https://reactjs.org/" },
];

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="relative z-10 min-h-screen w-screen bg-dark-black p-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-electric-blue">Skills</h2>
            <div className="max-w-6xl px-2 flex flex-wrap gap-8 justify-center mx-auto">
                {skills.map((skill, index) => (
                    <SkillBlock key={index} {...skill} />
                ))}
            </div>
        </section>
    );
};

const SkillBlock: React.FC<SkillProps> = ({ name, alt, logo, link }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [isOverContent, setIsOverContent] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        const handleScroll = () => {
            if (currentRef) {
                const rect = currentRef.getBoundingClientRect();
                setMousePosition(prevPosition => ({
                    x: prevPosition.x - rect.left,
                    y: prevPosition.y - rect.top
                }));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleContentEnter = () => {
        setIsOverContent(true);
    }

    const handleContentLeave = () => {
        setIsOverContent(false);
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        }
    };

    return (
        <div
            className={`relative ${isHovered ? 'skillblock-circular-gradient' : ''}`}
            style={{ width: '250px', height: '200px', }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {/* top left */}
            <div className="absolute top-0 left-0 w-[3px] h-5 bg-neon-green -translate-x-px -translate-y-1/2"></div>
            <div className={`absolute top-0 left-0 w-5 h-[3px] bg-neon-green -translate-y-px -translate-x-1/2 transition-transform duration-[1000ms] ease-in ${isVisible ? '' : '-rotate-45'}`}></div>
            {/* bottom right */}
            <div className="absolute bottom-0 right-0 w-[3px] h-5 bg-neon-green translate-x-px translate-y-1/2"></div>
            <div className={`absolute bottom-0 right-0 w-5 h-[3px] bg-neon-green translate-y-px translate-x-1/2 transition-transform duration-[1000ms] ease-in ${isVisible ? '' : 'rotate-45'}`}></div>
            {/* Main box */}
            <div className="relative w-full h-full overflow-hidden">
                <div
                    ref={ref}
                    className="w-full h-full border border-gray-300 rounded-tr-lg rounded-bl-lg flex flex-col items-center justify-center"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        mixBlendMode: 'difference'
                    }}
                >
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[40%] relative"
                        onMouseEnter={handleContentEnter}
                        onMouseLeave={handleContentLeave}
                    >
                        <div className="w-full relative aspect-square">
                            <Image
                                src={logo}
                                fill
                                style={{ objectFit: 'contain' }}
                                alt={alt}
                            />
                        </div>
                        <p className="mt-2 text-center cursor-pointer">
                            {name}
                        </p>
                    </Link>
                </div>
                {isHovered && (
                    <div
                        className="absolute pointer-events-none bg-white rounded-full transition duration-300"
                        style={{
                            left: isOverContent ? `${mousePosition.x - 50}px` : `${mousePosition.x - 20}px`,
                            top: isOverContent ? `${mousePosition.y - 50}px` : `${mousePosition.y - 20}px`,
                            width: isOverContent ? '100px' : '40px',
                            height: isOverContent ? '100px' : '40px',
                            mixBlendMode: 'difference',
                            transition: 'width 0.15s, height 0.15s'
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default SkillsSection;
