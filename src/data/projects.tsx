import ProjectDetail from "../components/listComponent/ProjectDetails";
import { projects } from ".";
import { Post, Tab } from "../interfaces";

const { Authmap, AnimatedPortfolio, MelvinsPortfolio, FoodBlog, GoTravel, HealthyBlog } = projects

export const MelvinProjects: Post[] = [
    {
        titulo: "🎨 📁 Animated portfolio",
        tab: 'Next',
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
        titulo: '🗺️ 🔐 Authmap',
        tab: 'Angular',
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
        titulo: "🍗 💻 Food blog",
        tab: 'Vue',
        contenido: <ProjectDetail
            imageSrc={FoodBlog.imageSrc}
            description={FoodBlog.description}
            technologies={FoodBlog.technologies}
            framework={FoodBlog.framework}
            liveLink={FoodBlog.liveLink}
            githubLink={FoodBlog.githubLink}
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
        titulo: "👨‍💻 📁 Melvin's portfolio",
        tab: 'React',
        contenido: <ProjectDetail
            imageSrc={MelvinsPortfolio.imageSrc}
            description={MelvinsPortfolio.description}
            technologies={MelvinsPortfolio.technologies}
            framework={MelvinsPortfolio.framework}
            liveLink={MelvinsPortfolio.liveLink}
            githubLink={MelvinsPortfolio.githubLink}
        />
    },
];

export const MelvinProjectsTags: Tab[] = [
    { tag: 'Angular', filtro: 'Angular' },
    { tag: 'React', filtro: 'React' },
    { tag: 'Next', filtro: 'Next' },
    { tag: 'Vue', filtro: 'Vue' },
];


