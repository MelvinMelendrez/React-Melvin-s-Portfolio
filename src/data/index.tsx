import { Skills, Abilities, ContactMe } from "../components/perksComponent/index";
import { AbilitiesCard, SkillCard, Tag } from "../interfaces";


/// list component

export const projects = {
    Authmap: {
        proyect: "Authmap",
        imageSrc: "https://cdn.sanity.io/images/ohx8wpby/production/223b4126281cddbe28215abe090e5931903adfb9-1437x1503.jpg",
        description: (
            <>
                <p>Imagine having a secret map on your phone where no one can know your exact location. Our app allows you to explore with complete confidentiality and peace of mind. With an intuitive and sleek interface, you can navigate without the worry of accidentally sharing your whereabouts. Experience freedom and privacy like never before!</p>
                <p>This project integrates Firebase for secure login and registration with Mapbox for interactive map visualization. It offers a seamless authentication experience and advanced mapping features, ideal for building scalable and secure applications.</p>
            </>
        ),
        technologies: [
            { text: 'Typescript', image: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1-1175078.png' },
            { text: 'Mapbox', image: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/mapbox_icon_138401.png' },
            { text: 'Firebase', image: 'https://cdn.iconscout.com/icon/free/png-512/firebase-1-282796.png' },
            { text: 'Responsive', image: 'https://cdn.sanity.io/images/ohx8wpby/production/3134ad6cae156d0e006900937251531fd5a34973-1500x938.png' },
            { text: 'Sass', image: 'https://cdn.sanity.io/images/ohx8wpby/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png' },
            { text: 'Animation', image: 'https://cdn.sanity.io/images/ohx8wpby/production/0cfb370de56592ba97e8341141f766203a38c38e-400x400.png' },
            { text: 'Github', image: 'https://cdn.iconscout.com/icon/free/png-512/github-170-1175028.png' },

        ],
        framework: { text: "Angular", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
        liveLink: "https://auth-map-grmg.vercel.app/",
        githubLink: "https://github.com/MelvinMelendrez/Angular-authMap"
    },
    AnimatedPortfolio: {
        proyect: "AnimatedPortfolio",
        imageSrc: "https://cdn.sanity.io/images/ohx8wpby/production/19fdc2bb0aa3b0a1faf5646cb8b7d2c8dde2ede9-1440x1520.jpg",
        description: (
            <>
                <p>Step into my portfolio where innovation meets artistry. Discover a world of smooth animations and interactive designs that bring each project to life. With captivating visuals and seamless motion, every creation tells a story of elegance and functionality. Enjoy an engaging journey through the latest in web development, where technology and creativity unite to deliver an exceptional user experience.</p>
                <p>Framer motion, react spring and next ui animations portfolio</p>
            </>
        ),
        technologies: [
            { text: 'Javascript', image: 'https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png' },
            { text: 'Responsive', image: 'https://cdn.sanity.io/images/ohx8wpby/production/3134ad6cae156d0e006900937251531fd5a34973-1500x938.png' },
            { text: 'Sass', image: 'https://cdn.sanity.io/images/ohx8wpby/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png' },
            { text: 'Animation', image: 'https://cdn.sanity.io/images/ohx8wpby/production/0cfb370de56592ba97e8341141f766203a38c38e-400x400.png' },
            { text: 'Framer Motion', image: 'https://cdn.sanity.io/images/ohx8wpby/production/8e8b514518628b3bff60eab330b1982adcbc3382-2500x2500.svg' },
            { text: 'Github', image: 'https://cdn.iconscout.com/icon/free/png-512/github-170-1175028.png' },

        ],
        framework: { text: "Next js", image: "https://cdn.sanity.io/images/ohx8wpby/production/b617829af6b887556765eb9baa3cd69c205a7744-3000x1811.png" },
        liveLink: "https://next-animated-portfolio.vercel.app/",
        githubLink: "https://github.com/MelvinMelendrez/Next-Animated-Portfolio"
    },
    GoTravel: {
        proyect: "GoTravel",
        imageSrc: "https://cdn.sanity.io/images/ohx8wpby/production/bb4499fb72f84eb6818be9593b5c972f42d34b3e-370x720.jpg",
        description: (
            <>
                <p>Don’t let travel hassles hold you back! Our app helps you effortlessly find restaurants and hotels no matter where you are. With an intuitive interface powered by React Navigation and Google Autocomplete, you can quickly search for dining and lodging options. The app displays real-time data from a reliable API, all styled with Tailwind CSS for a modern and user-friendly experience. Enjoy your travels with the convenience of having all your accommodation and dining needs at your fingertips!</p>
                <p>Application that uses react navigation, google autocomplete and displays the data obtained from an api with tailwin css</p>
            </>
        ),
        technologies: [
            { text: 'Javascript', image: 'https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png' },
            { text: 'Sass', image: 'https://cdn.sanity.io/images/ohx8wpby/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png' },
            { text: 'Animation', image: 'https://cdn.sanity.io/images/ohx8wpby/production/0cfb370de56592ba97e8341141f766203a38c38e-400x400.png' },
            { text: 'Github', image: 'https://cdn.iconscout.com/icon/free/png-512/github-170-1175028.png' },
            { text: 'Framer Motion', image: 'https://cdn.sanity.io/images/ohx8wpby/production/8e8b514518628b3bff60eab330b1982adcbc3382-2500x2500.svg' },

        ],
        framework: { text: "React Native", image: "https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png" },
        liveLink: "https://cdn.sanity.io/images/ohx8wpby/production/9b2898a654a087fa109ff6ccbf6294de27c53636-702x1024.jpg",
        githubLink: "https://github.com/MelvinMelendrez/ReactNative-Go-Travel"
    },
    HealthyBlog: {
        proyect: "HealthyBlog",
        imageSrc: "https://cdn.sanity.io/images/ohx8wpby/production/7f7a2f05037be61fb6538c0b96769b70fec544ed-1439x759.png",
        description: (
            <>
                <p>If you want to be healthy, follow this blog. Here, you'll find a wide range of articles designed to help you improve your health and well-being. From nutrition tips to exercise routines and mental health advice, our blog offers valuable insights and practical advice for a healthier lifestyle. Stay informed, stay motivated, and take control of your health with our expert guidance.</p>
                <p>responsive full stack blog</p>
            </>
        ),
        technologies: [
            { text: 'Javascript', image: 'https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png' },
            { text: 'Responsive', image: 'https://cdn.sanity.io/images/ohx8wpby/production/3134ad6cae156d0e006900937251531fd5a34973-1500x938.png' },
            { text: 'Sass', image: 'https://cdn.sanity.io/images/ohx8wpby/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png' },
            { text: 'Sanity', image: 'https://avatars.githubusercontent.com/u/17177659?s=280&v=4' },
            { text: 'Github', image: 'https://cdn.iconscout.com/icon/free/png-512/github-170-1175028.png' },
        ],
        framework: { text: "Next js", image: "https://cdn.sanity.io/images/ohx8wpby/production/b617829af6b887556765eb9baa3cd69c205a7744-3000x1811.png" },
        liveLink: "https://blog-six-ivory.vercel.app/",
        githubLink: "https://github.com/MelvinMelendrez/Next-Blog"
    },
    MelvinsPortfolio: {
        proyect: "MelvinsPortfolio",
        imageSrc: "https://cdn.sanity.io/images/ohx8wpby/production/beeb006981c79f72ad02ca581f1c5fb32f5dde8b-696x822.png",
        description: (
            <>
                <p>Imagine having a secret map on your phone where no one can know your exact location. Our app allows you to explore with complete confidentiality and peace of mind. With an intuitive and sleek interface, you can navigate without the worry of accidentally sharing your whereabouts. Experience freedom and privacy like never before!</p>
                <p>This project integrates Firebase for secure login and registration with Mapbox for interactive map visualization. It offers a seamless authentication experience and advanced mapping features, ideal for building scalable and secure applications.</p>            </>
        ),
        technologies: [
            { text: 'Typescript', image: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1-1175078.png' },
            { text: 'Responsive', image: 'https://cdn.sanity.io/images/ohx8wpby/production/3134ad6cae156d0e006900937251531fd5a34973-1500x938.png' },
            { text: 'Sass', image: 'https://cdn.sanity.io/images/ohx8wpby/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png' },
            { text: 'Animation', image: 'https://cdn.sanity.io/images/ohx8wpby/production/0cfb370de56592ba97e8341141f766203a38c38e-400x400.png' },
            { text: 'Github', image: 'https://cdn.iconscout.com/icon/free/png-512/github-170-1175028.png' },

        ],
        framework: { text: "React", image: "https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png" },
        liveLink: "https://melvinapp.com",
        githubLink: "https://github.com/MelvinMelendrez/melvin-s-portfolio"
    },
    Portfolio: {
        proyect: "React Portfolio",
        imageSrc: "https://cdn.sanity.io/images/ohx8wpby/production/12284ecf9dc8f40d15c63481550d07b9e4fd6325-1229x787.png",
        description: (
            <>
                <p>Explore my coding journey through this interactive portfolio. Built with the latest technologies, it features smooth animations and a clean, modern design. You'll find detailed projects, personal insights, and the tools I've used along the way. Dive in to see how I've grown as a developer and the exciting projects I've created.</p>
                <p>React full stack portfolio with high order components, framer motion animation with sanity backend</p>
            </>
        ),
        technologies: [
            { text: 'Javascript', image: 'https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png' },
            { text: 'Responsive', image: 'https://cdn.sanity.io/images/ohx8wpby/production/3134ad6cae156d0e006900937251531fd5a34973-1500x938.png' },
            { text: 'Sass', image: 'https://cdn.sanity.io/images/ohx8wpby/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png' },
            { text: 'Framer Motion', image: 'https://cdn.sanity.io/images/ohx8wpby/production/8e8b514518628b3bff60eab330b1982adcbc3382-2500x2500.svg' },
            { text: 'Github', image: 'https://cdn.iconscout.com/icon/free/png-512/github-170-1175028.png' },

        ],
        framework: { text: "React", image: "https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png" },
        liveLink: "https://portfolio-krispis0.vercel.app/",
        githubLink: "https://github.com/MelvinMelendrez/React-Portfolio"
    },
}

/// perks component

export const tags: Tag[] = [
    { text: 'skills', component: <Skills /> },
    { text: 'abilities', component: <Abilities /> },
    { text: 'contact me', component: <ContactMe /> },
];

export const SkillCards: SkillCard[] = [
    { text: "React", image: "https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png" },
    { text: 'Next JS', image: 'https://cdn.sanity.io/images/ohx8wpby/production/b617829af6b887556765eb9baa3cd69c205a7744-3000x1811.png' },
    { text: 'Angular', image: 'https://cdn.iconscout.com/icon/free/png-512/angular-3-226070.png' },
    { text: "React Native", image: "https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png" },
    { text: 'Javascript', image: 'https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png' },
    { text: 'Typescript', image: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1-1175078.png' },
    { text: 'Sass', image: 'https://cdn.sanity.io/images/ohx8wpby/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png' },
    { text: 'Tailwind CSS', image: 'https://cdn.sanity.io/images/ohx8wpby/production/96318c38e7abe87e605754762ee885dedd683f58-3000x1799.png' },
    { text: 'Mobile', image: 'https://cdn.sanity.io/images/ohx8wpby/production/050d1234e6b032e93dbf02aec82f8dd567857f11-512x512.png' },
    { text: 'MySQL', image: 'https://cdn.sanity.io/images/ohx8wpby/production/29a1a3d24f0fd329665dfd426703c74e4034e20f-300x300.png' },
    { text: 'Mongo DB', image: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png' },
    { text: 'Github', image: 'https://cdn.iconscout.com/icon/free/png-512/github-170-1175028.png' },
    { text: 'Firebase', image: 'https://cdn.iconscout.com/icon/free/png-512/firebase-1-282796.png' },
    { text: 'Responsive', image: 'https://cdn.sanity.io/images/ohx8wpby/production/3134ad6cae156d0e006900937251531fd5a34973-1500x938.png' },
    { text: 'Bootstrap', image: 'https://cdn.iconscout.com/icon/free/png-512/bootstrap-226077.png' },
    { text: 'Node js', image: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png' },
    { text: 'Redux', image: 'https://cdn.sanity.io/images/ohx8wpby/production/95f283c9b1bb27fa7a3d720c7371ae447f2e18d3-500x500.png' },
    { text: 'Framer Motion', image: 'https://cdn.sanity.io/images/ohx8wpby/production/8e8b514518628b3bff60eab330b1982adcbc3382-2500x2500.svg' },
    { text: 'Mapbox', image: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/mapbox_icon_138401.png' },
    { text: 'Sanity', image: 'https://avatars.githubusercontent.com/u/17177659?s=280&v=4' },
    { text: 'Postman', image: 'https://cdn.sanity.io/images/ohx8wpby/production/218b0ac06a03878498195cc2d744a0cb488bcaff-3000x3000.png' },
    { text: 'Animation', image: 'https://cdn.sanity.io/images/ohx8wpby/production/0cfb370de56592ba97e8341141f766203a38c38e-400x400.png' },
];

export const AbilitiesCards: AbilitiesCard[] = [
    { text: 'Team worker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79iz-1kAPsk59dClvPjyZTNT9qAeUhXdD7w&s' },
    { text: 'Adaptability', image: 'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-44-e1478037191772-1024x547.jpg' },
    { text: 'Fast learner', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxP54RIAhRXxf2jWHEP6eSBW2wBowabsLZg&s' },
    { text: 'Creativity', image: 'https://wpvip.edutopia.org/wp-content/uploads/2023/07/hero_blog_Creativity_Teaching-Strategies_illustration_ispot_a4107ir1267_Sam-Falconer.jpg?w=2880&quality=85' },
    { text: 'Attention to detail', image: 'data:image/png;base64,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' },
];
