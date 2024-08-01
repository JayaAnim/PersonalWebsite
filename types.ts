
export type Position = {
    x: number;
    y: number;
}

export type SkillProps = {
    name: string;
    alt: string;
    logo: string;
    link: string;
}

export type SkillBlockProps = {
    name: string;
    alt: string;
    logo: string;
    link: string;
    mousePosition: Position;

}

export type ExperienceItemProps = {
    title: string;
    company: string;
    date: string;
    responsibilities: string[];
}

export type IconProps = {
    className?: string;
} & React.SVGProps<SVGSVGElement>
