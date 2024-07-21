import { Skills, Abilities, ContactMe } from "../components/perks";
import { AbilitiesCard, Post, SkillCard, Tab, Tag } from "../interfaces";

export const MelvinProjects: Post[] = [
    {
        titulo: '🗺️🔐 authmap',
        tab: 'front-end',
        contenido: (
            <div>
                <p>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aspernatur, blanditiis minima officia possimus quibusdam aperiam id sed repudiandae? Ipsam, modi harum quidem accusamus maxime quam explicabo! Veritatis, corporis enim.</p>
            </div>
        )
    },
    {
        titulo: '🥗📖 healthy blog',
        tab: 'full-stack',
        contenido: (
            <div>
                <p>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aspernatur, blanditiis minima officia possimus quibusdam aperiam id sed repudiandae? Ipsam, modi harum quidem accusamus maxime quam explicabo! Veritatis, corporis enim.</p>
            </div>
        )
    },
    {
        titulo: "👨‍💻📁 melvin's portfolio",
        tab: 'full-stack',
        contenido: (
            <div>
                <p>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aspernatur, blanditiis minima officia possimus quibusdam aperiam id sed repudiandae? Ipsam, modi harum quidem accusamus maxime quam explicabo! Veritatis, corporis enim.</p>
            </div>
        )
    },
    {
        titulo: "🎨📁 melvin's animated portfolio",
        tab: 'front-end',
        contenido: (
            <div>
                <p>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aspernatur, blanditiis minima officia possimus quibusdam aperiam id sed repudiandae? Ipsam, modi harum quidem accusamus maxime quam explicabo! Veritatis, corporis enim.</p>
            </div>
        )
    },
    {
        titulo: '✈️🌍 go travel',
        tab: 'front-end',
        contenido: (
            <div>
                <p>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aspernatur, blanditiis minima officia possimus quibusdam aperiam id sed repudiandae? Ipsam, modi harum quidem accusamus maxime quam explicabo! Veritatis, corporis enim.</p>
            </div>
        )
    },
];

export const MelvinProjectsTags: Tab[] = [
    { tag: 'front-end', filtro: 'front-end' },
    { tag: 'full-stack', filtro: 'full-stack' },
];

export const tags: Tag[] = [
    { text: 'skills', component: <Skills /> },
    { text: 'abilities', component: <Abilities /> },
    { text: 'contact me', component: <ContactMe /> },
];

export const SkillCards: SkillCard[] = [
    { text: 'Skill 1', icon: '🔧' },
    { text: 'Skill 2', icon: '💡' },
    { text: 'Skill 1', icon: '🔧' },
    { text: 'Skill 2', icon: '💡' },
    { text: 'Skill 1', icon: '🔧' },
    { text: 'Skill 2', icon: '💡' },
    { text: 'Skill 1', icon: '🔧' },
    { text: 'Skill 2', icon: '💡' },
    { text: 'Skill 1', icon: '🔧' },
    { text: 'Skill 2', icon: '💡' },
    { text: 'Skill 1', icon: '🔧' },
    { text: 'Skill 2', icon: '💡' },
];

export const AbilitiesCards: AbilitiesCard[] = [
    { text: 'Skill 1', icon: '🔧', framework: 'react' },
    { text: 'Skill 2', icon: '💡', framework: 'angular' },
    { text: 'Skill 1', icon: '🔧', framework: 'react' },
    { text: 'Skill 2', icon: '💡', framework: 'next' },
    { text: 'Skill 1', icon: '🔧', framework: 'react' },
    { text: 'Skill 2', icon: '💡', framework: 'react native' },
];
