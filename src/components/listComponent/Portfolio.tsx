import { tecnologiesHealthyBlog } from '../../data'
import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/12284ecf9dc8f40d15c63481550d07b9e4fd6325-1229x787.png" alt="" className={Styles.image} />
                <div>
                    <p>Explore my coding journey through this interactive portfolio. Built with the latest technologies, it features smooth animations and a clean, modern design. You'll find detailed projects, personal insights, and the tools I've used along the way. Dive in to see how I've grown as a developer and the exciting projects I've created.</p>
                    <p>React full stack portfolio with high order components, framer motion animation with sanity backend</p>
                    <button>live</button>
                    <button>github</button>
                </div>
            </div>
            <div className={Styles.footer}>

                <div className={Styles.framework}>
                    <span className={Styles.tecnologiesTitle}>framework</span>
                    <div className={Styles.frameworkContainer}>
                        <div className={Styles.frameworkCard}>
                            <img src='https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png' alt='a' className={Styles.frameworkImage} />
                            <span>React</span>
                        </div>
                    </div>
                </div>

                <div className={Styles.tecnologies}>
                    <span className={Styles.tecnologiesTitle}>technologies</span>
                    <div className={Styles.tecnologiesContainer}>
                        {tecnologiesHealthyBlog.map(({ text, image }) => (
                            <div key={text} className={Styles.tecnologiCard}>
                                <img src={image} alt='a' className={Styles.TecnologiesImage} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authmap