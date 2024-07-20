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