import { tecnologiesHealthyBlog } from '../../data'
import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/bb4499fb72f84eb6818be9593b5c972f42d34b3e-370x720.jpg" alt="" className={Styles.image} />
                <div>
                    <p>Don’t let travel hassles hold you back! Our app helps you effortlessly find restaurants and hotels no matter where you are. With an intuitive interface powered by React Navigation and Google Autocomplete, you can quickly search for dining and lodging options. The app displays real-time data from a reliable API, all styled with Tailwind CSS for a modern and user-friendly experience. Enjoy your travels with the convenience of having all your accommodation and dining needs at your fingertips!</p>
                    <p>Application that uses react navigation, google autocomplete and displays the data obtained from an api with tailwin css</p>
                    <button>live</button>
                    <button>github</button>
                </div>
            </div>
            <div className={Styles.footer}>

                <div className={Styles.framework}>
                    <span className={Styles.tecnologiesTitle}>framework</span>
                    <div className={Styles.frameworkContainer}>
                        <div className={Styles.frameworkCard}>
                            <img src='https://cdn.sanity.io/images/ohx8wpby/production/577121542b345a1e273b0a54610d9b94c35a9235-3000x2406.png' alt='a' className={Styles.frameworkImage} />
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