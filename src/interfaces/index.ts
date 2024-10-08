export interface Post {
    titulo: string;
    tab: string;
    contenido: JSX.Element;
}

export interface Tab {
    tag: string;
    filtro: string;
}

export interface ListComponentProps {
    data: Post[];
    tabs: Tab[];
    title?: string;
}

export interface Tag {
    text: string;
    component: JSX.Element;
}

export interface SkillCard {
    text: string;
    image: string;
}
export interface AbilitiesCard {
    text: string;
    image: string;
}
export interface technologies {
    text: string;
    image: string;
}
export interface Project {
    proyect?: string;
    imageSrc: string;
    description: JSX.Element;
    technologies: technologies[];
    framework: technologies;
    liveLink: string;
    githubLink: string;
}