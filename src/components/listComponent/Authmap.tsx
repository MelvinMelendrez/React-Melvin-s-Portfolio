import { tecnologiesAuthmap } from '../../data'
import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/223b4126281cddbe28215abe090e5931903adfb9-1437x1503.jpg" alt="" className={Styles.image} />
                <div>
                    <p>Imagine having a secret map on your phone where no one can know your exact location. Our app allows you to explore with complete confidentiality and peace of mind. With an intuitive and sleek interface, you can navigate without the worry of accidentally sharing your whereabouts. Experience freedom and privacy like never before!</p>
                    <p>This project integrates Firebase for secure login and registration with Mapbox for interactive map visualization. It offers a seamless authentication experience and advanced mapping features, ideal for building scalable and secure applications.</p>
                    <button>live</button>
                    <button>github</button>
                </div>
            </div>
            <div className={Styles.footer}>

                <div className={Styles.framework}>
                    <span className={Styles.tecnologiesTitle}>framework</span>
                    <div className={Styles.frameworkContainer}>
                        <div className={Styles.frameworkCard}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' alt='a' className={Styles.frameworkImage} />
                            <span>Angular</span>
                        </div>
                    </div>
                </div>

                <div className={Styles.tecnologies}>
                    <span className={Styles.tecnologiesTitle}>technologies</span>
                    <div className={Styles.tecnologiesContainer}>
                        {tecnologiesAuthmap.map(({ text, image }) => (
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