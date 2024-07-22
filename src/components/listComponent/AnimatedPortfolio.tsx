import { tecnologiesHealthyBlog } from '../../data'
import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/19fdc2bb0aa3b0a1faf5646cb8b7d2c8dde2ede9-1440x1520.jpg" alt="" className={Styles.image} />
                <div>
                    <p>Step into my portfolio where innovation meets artistry. Discover a world of smooth animations and interactive designs that bring each project to life. With captivating visuals and seamless motion, every creation tells a story of elegance and functionality. Enjoy an engaging journey through the latest in web development, where technology and creativity unite to deliver an exceptional user experience.</p>
                    <p>Framer motion, react spring and next ui animations portfolio</p>
                    <button>live</button>
                    <button>github</button>
                </div>
            </div>
            <div className={Styles.footer}>

                <div className={Styles.framework}>
                    <span className={Styles.tecnologiesTitle}>framework</span>
                    <div className={Styles.frameworkContainer}>
                        <div className={Styles.frameworkCard}>
                            <img src='https://cdn.sanity.io/images/ohx8wpby/production/b617829af6b887556765eb9baa3cd69c205a7744-3000x1811.png' alt='a' className={Styles.frameworkImage} />
                            <span>Next</span>
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