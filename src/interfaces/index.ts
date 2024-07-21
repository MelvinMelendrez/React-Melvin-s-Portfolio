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
    icon: string;
}
export interface AbilitiesCard {
    text: string;
    image: string;
}