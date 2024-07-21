import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
    const tecnologies = [
        { text: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
        { text: 'typscript', image: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1-1175078.png' },
        { text: 'mapbox', image: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/mapbox_icon_138401.png' },
        { text: 'firebase', image: 'https://cdn.iconscout.com/icon/free/png-512/firebase-1-282796.png' },
    ]

    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/bb4499fb72f84eb6818be9593b5c972f42d34b3e-370x720.jpg" alt="" className={Styles.image} />
                <div>
                    <p>You're traveling, and you don't find where to eat or sleep? Search for restaurants and hotels wherever you are</p>
                    <p>Application that uses react navigation, google autocomplete and displays the data obtained from an api with tailwin css</p>
                    <button>live</button>
                    <button>github</button>
                </div>
            </div>
            <span className={Styles.tecnologiesTitle}>tecnologies</span>
            <div className={Styles.tecnologiesContainer}>
                {tecnologies.map(({ text, image }) => (
                    <div key={text} className={Styles.tecnologiCard}>
                        <img src={image} alt='a' className={Styles.TecnologiesImage} />
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Authmap