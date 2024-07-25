import ProjectDetail from "../components/listComponent/ProjectDetails";
import { projects } from ".";
import { Post, Tab } from "../interfaces";

const { Authmap, AnimatedPortfolio, GoTravel, HealthyBlog, MelvinsPortfolio, Portfolio } = projects

export const MelvinProjects: Post[] = [
    {
        titulo: '🗺️🔐 Authmap',
        tab: 'front-end',
        contenido: <ProjectDetail
            imageSrc={Authmap.imageSrc}
            description={Authmap.description}
            technologies={Authmap.technologies}
            framework={Authmap.framework}
            liveLink={Authmap.liveLink}
            githubLink={Authmap.githubLink}
        />
    },
    {
        titulo: '🥗📖 Healthy blog',
        tab: 'full-stack',
        contenido: <ProjectDetail
            imageSrc={HealthyBlog.imageSrc}
            description={HealthyBlog.description}
            technologies={HealthyBlog.technologies}
            framework={HealthyBlog.framework}
            liveLink={HealthyBlog.liveLink}
            githubLink={HealthyBlog.githubLink}
        />
    },
    {
        titulo: "👨‍💻📁 Melvin's portfolio",
        tab: 'front-end',
        contenido: <ProjectDetail
            imageSrc={MelvinsPortfolio.imageSrc}
            description={MelvinsPortfolio.description}
            technologies={MelvinsPortfolio.technologies}
            framework={MelvinsPortfolio.framework}
            liveLink={MelvinsPortfolio.liveLink}
            githubLink={MelvinsPortfolio.githubLink}
        />
    },
    {
        titulo: "⚛️📁 React portfolio",
        tab: 'full-stack',
        contenido: <ProjectDetail
            imageSrc={Portfolio.imageSrc}
            description={Portfolio.description}
            technologies={Portfolio.technologies}
            framework={Portfolio.framework}
            liveLink={Portfolio.liveLink}
            githubLink={Portfolio.githubLink}
        />
    },
    {
        titulo: "🎨📁 Melvin's animated portfolio",
        tab: 'front-end',
        contenido: <ProjectDetail
            imageSrc={AnimatedPortfolio.imageSrc}
            description={AnimatedPortfolio.description}
            technologies={AnimatedPortfolio.technologies}
            framework={AnimatedPortfolio.framework}
            liveLink={AnimatedPortfolio.liveLink}
            githubLink={AnimatedPortfolio.githubLink}
        />
    },
    {
        titulo: '✈️🌍 Go travel',
        tab: 'front-end',
        contenido: <ProjectDetail
            imageSrc={GoTravel.imageSrc}
            description={GoTravel.description}
            technologies={GoTravel.technologies}
            framework={GoTravel.framework}
            liveLink={GoTravel.liveLink}
            githubLink={GoTravel.githubLink}
        />
    },
];

export const MelvinProjectsTags: Tab[] = [
    { tag: 'front-end', filtro: 'front-end' },
    { tag: 'full-stack', filtro: 'full-stack' },
];

